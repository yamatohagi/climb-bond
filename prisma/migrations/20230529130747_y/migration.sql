/*
  Warnings:

  - Added the required column `belayMonths` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experienceYears` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "belayMonths" INTEGER NOT NULL,
ADD COLUMN     "experienceYears" INTEGER NOT NULL,
ADD COLUMN     "grade" TEXT NOT NULL;
