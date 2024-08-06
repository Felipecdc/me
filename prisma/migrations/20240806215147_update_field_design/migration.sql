/*
  Warnings:

  - Made the column `link` on table `Design` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Design" ALTER COLUMN "link" SET NOT NULL;
