"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 } from "uuid";

export const createProject = async (form: FormData) => {
  const name = form.get("name");
  const imageUrl = form.get("imageUrl") as File;
  const status = form.get("status");
  const github = form.get("github");
  const linkedin = form.get("linkedin");
  const deploy = form.get("deploy");

  const buffer = (await imageUrl.arrayBuffer()) as Buffer;

  const client = new S3Client({
    region: process.env.AWS_RIGION || "sa-east-1",
  });

  try {
    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: "public-read",
      Key: `project-picture/${v4()}.${imageUrl.type.split("/")[1]}`,
      Body: buffer,
    });

    const response = await client.send(command);
    console.log("Upload bem-sucedido:", response);
  } catch (error) {
    console.error("Erro ao fazer upload para o Amazon S3:", error);
    throw error;
  }
};
