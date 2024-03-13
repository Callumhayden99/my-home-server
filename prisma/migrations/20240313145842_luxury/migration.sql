-- CreateEnum
CREATE TYPE "HomeType" AS ENUM ('APARTMENT', 'HOUSE', 'VILLA', 'PENTHOUSE', 'BUNGALOW', 'MANSION');

-- CreateTable
CREATE TABLE "LuxuryHome" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "homeType" "HomeType" NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "hasGarden" BOOLEAN NOT NULL,
    "hasGarage" BOOLEAN NOT NULL,
    "sqftArea" INTEGER NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LuxuryHome_pkey" PRIMARY KEY ("id")
);
