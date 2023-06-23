/*
  Warnings:

  - You are about to drop the column `date` on the `Achievements` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Achievements" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "date";
