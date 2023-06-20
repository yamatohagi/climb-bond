/*
  Warnings:

  - You are about to drop the `GymImpressionPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GymImpressionPost" DROP CONSTRAINT "GymImpressionPost_gymId_fkey";

-- DropTable
DROP TABLE "GymImpressionPost";

-- CreateTable
CREATE TABLE "GymImpPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "gymId" INTEGER NOT NULL,

    CONSTRAINT "GymImpPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GymImpPostLike" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "gymImpPostId" INTEGER,

    CONSTRAINT "GymImpPostLike_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GymImpPost" ADD CONSTRAINT "GymImpPost_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymImpPostLike" ADD CONSTRAINT "GymImpPostLike_gymImpPostId_fkey" FOREIGN KEY ("gymImpPostId") REFERENCES "GymImpPost"("id") ON DELETE SET NULL ON UPDATE CASCADE;
