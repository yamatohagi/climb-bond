/*
  Warnings:

  - You are about to drop the column `experienceYears` on the `Post` table. All the data in the column will be lost.
  - Added the required column `experienceMonths` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "experienceYears",
ADD COLUMN     "experienceMonths" INTEGER NOT NULL;
