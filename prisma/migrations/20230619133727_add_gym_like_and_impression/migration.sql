-- CreateTable
CREATE TABLE "GymLike" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "gymId" INTEGER NOT NULL,

    CONSTRAINT "GymLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GymImpressionPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "userName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "gymId" INTEGER NOT NULL,

    CONSTRAINT "GymImpressionPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GymLike" ADD CONSTRAINT "GymLike_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymImpressionPost" ADD CONSTRAINT "GymImpressionPost_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
