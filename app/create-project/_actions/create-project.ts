"use server";

import { db } from "@/app/_lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 } from "uuid";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto").max(50, "Nome muito longo"),
  imageUrl: z.instanceof(File),
  status: z.string().min(2, "Status muito curto").max(10, "Status muito longo"),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  deploy: z.string().optional(),
});

export const createProject = async (form: FormData) => {
  const validation = formSchema.safeParse({
    name: form.get("name"),
    imageUrl: form.get("imageUrl") as File,
    status: form.get("status"),
    github: form.get("github"),
    linkedin: form.get("linkedin"),
    deploy: form.get("deploy"),
  });

  if (validation.success) {
    const { name, imageUrl, status, github, linkedin, deploy } =
      validation.data;

    const project = await db.project.create({
      data: {
        id: v4(),
        name,
        imageUrl: "",
        status,
        links: {
          create: {
            id: v4(),
            github: github,
            linkedin: linkedin,
            deploy: deploy,
          },
        },
      },
      include: {
        links: true,
      },
    });

    const buffer = (await imageUrl.arrayBuffer()) as Buffer;

    const client = new S3Client({
      region: process.env.AWS_RIGION,
    });

    const key = `project-picture/${v4()}.${imageUrl.type.split("/")[1]}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: "public-read",
      Key: key,
      Body: buffer,
    });

    await db.project.update({
      where: {
        id: project.id,
      },
      data: {
        imageUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`,
      },
    });

    try {
      await client.send(command);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(validation.error);
    return {
      errors: validation.error.issues,
    };
  }
};
