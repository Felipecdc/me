/*
  Warnings:

  - You are about to drop the column `codeDependecies` on the `Components` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Components" DROP COLUMN "codeDependecies",
ADD COLUMN     "codeDependencies" TEXT;
