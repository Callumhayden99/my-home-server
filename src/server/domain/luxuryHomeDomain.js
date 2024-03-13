import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new luxury home
export const createLuxuryHome = async (data) => {
  return await prisma.luxuryHome.create({ data });
};

// Get all luxury homes
export const getLuxuryHomes = async () => {
  return await prisma.luxuryHome.findMany();
};

// Get a specific luxury home by ID
export const getLuxuryHomeById = async (id) => {
  return await prisma.luxuryHome.findUnique({ where: { id } });
};

// Update a luxury home
export const updateLuxuryHome = async (id, data) => {
  return await prisma.luxuryHome.update({ where: { id }, data });
};

// Delete a luxury home
export const deleteLuxuryHome = async (id) => {
  return await prisma.luxuryHome.delete({ where: { id } });
};