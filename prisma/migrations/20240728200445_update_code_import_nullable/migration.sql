/*
  Warnings:

  - Added the required column `codeImport` to the `Components` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Components" ADD COLUMN     "codeDependecies" TEXT,
ADD COLUMN     "codeImport" TEXT NOT NULL,
ADD COLUMN     "codeMain" TEXT;
