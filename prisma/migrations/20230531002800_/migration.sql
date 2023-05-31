/*
  Warnings:

  - You are about to alter the column `dayAndTime` on the `PreferredDayAndTime` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(2)`.

*/
-- AlterTable
ALTER TABLE "PreferredDayAndTime" ALTER COLUMN "dayAndTime" SET DATA TYPE VARCHAR(2);
