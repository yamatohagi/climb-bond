/*
  Warnings:

  - You are about to drop the column `uuid` on the `Post` table. All the data in the column will be lost.
  - Added the required column `climbingType` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gymId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferredDayAndTime` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClimbingType" AS ENUM ('BOULDER', 'LEAD', 'BOTH');

-- DropIndex
DROP INDEX "Post_uuid_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "uuid",
ADD COLUMN     "climbingType" "ClimbingType" NOT NULL,
ADD COLUMN     "gymId" INTEGER NOT NULL,
ADD COLUMN     "preferredDayAndTime" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Gym" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "climbingType" "ClimbingType" NOT NULL,

    CONSTRAINT "Gym_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
