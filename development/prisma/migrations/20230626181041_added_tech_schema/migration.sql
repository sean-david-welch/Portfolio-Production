/*
  Warnings:

  - You are about to drop the column `description` on the `Skills` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Skills` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "description",
DROP COLUMN "image";

-- CreateTable
CREATE TABLE "Technologies" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Technologies_pkey" PRIMARY KEY ("id")
);
