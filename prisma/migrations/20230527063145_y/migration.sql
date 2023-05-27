/*
  Warnings:

  - You are about to drop the column `preferredDayAndTime` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "preferredDayAndTime";

-- CreateTable
CREATE TABLE "PreferredDayAndTime" (
    "id" SERIAL NOT NULL,
    "dayAndTime" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PreferredDayAndTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PreferredDayAndTime" ADD CONSTRAINT "PreferredDayAndTime_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
