"use server";

import { db } from "@/app/_lib/prisma";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 } from "uuid";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome muito curto").max(50, "Nome muito longo"),
  imageUrl: z
    .instanceof(File)
    .refine((file) => file instanceof File, "Você deve selecionar uma imagem"),
  link: z.string().min(1, "Campo obrigatório"),
});

export const createDesign = async (form: FormData) => {
  const validation = formSchema.safeParse({
    name: form.get("name"),
    imageUrl: form.get("imageUrl") as File,
    link: form.get("link"),
  });

  if (validation.success) {
    const { name, imageUrl, link } = validation.data;

    const design = await db.design.create({
      data: {
        id: v4(),
        name,
        imageUrl: "",
        link: "",
      },
    });

    const buffer = (await imageUrl.arrayBuffer()) as Buffer;

    const client = new S3Client({
      region: process.env.AWS_RIGION,
    });

    const key = `design-picture/${v4()}.${imageUrl.type.split("/")[1]}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: "public-read",
      Key: key,
      Body: buffer,
    });

    await db.design.update({
      where: {
        id: design.id,
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
