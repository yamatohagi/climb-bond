/*
  Warnings:

  - Changed the type of `dayAndTime` on the `PreferredDayAndTime` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PreferredDayAndTime" DROP COLUMN "dayAndTime",
ADD COLUMN     "dayAndTime" INTEGER NOT NULL;
