import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  try {
    await prisma.luxuryHome.deleteMany();
    console.log("Database cleared successfully.");
  } catch (error) {
    console.error(`Error clearing database: ${error.message}`);
  }
}

async function seedLuxuryHomes() {
  const luxuryHomes = [
    {
      title: 'Luxurious Villa',
      description: 'A stunning villa with breathtaking views',
      price: new Prisma.Decimal(1500000.00),
      address: '123 Luxury Lane',
      city: 'Beverly Hills',
      country: 'USA',
      homeType: 'VILLA',
      bedrooms: 5,
      bathrooms: 6,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 5000,
      yearBuilt: 2010,
      imageUrl: 'https://i.imgur.com/LTco9Ao.jpg',
    },
    {
      title: 'Modern Penthouse',
      description: 'A sleek and modern penthouse in the heart of the city',
      price: new Prisma.Decimal(2000000.00),
      address: '456 Skyline Drive',
      city: 'New York',
      country: 'USA',
      homeType: 'PENTHOUSE',
      bedrooms: 4,
      bathrooms: 4,
      hasGarden: false,
      hasGarage: true,
      sqftArea: 3500,
      yearBuilt: 2015,
      imageUrl: 'https://i.imgur.com/jLYO0Tu.png',
    },
    {
      title: 'Elegant Mansion',
      description: 'A grand mansion with exquisite architecture',
      price: new Prisma.Decimal(5500000.00),
      address: '789 Grandeur Avenue',
      city: 'Los Angeles',
      country: 'USA',
      homeType: 'MANSION',
      bedrooms: 8,
      bathrooms: 9,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 12000,
      yearBuilt: 2005,
      imageUrl: 'https://i.imgur.com/EKUJd1r.png',
    },
  ];

  try {
    await clearDatabase();
    for (const luxuryHome of luxuryHomes) {
      await prisma.luxuryHome.create({ data: luxuryHome });
    }
    console.log('Luxury homes seeded successfully!');
  } catch (error) {
    console.error('Error seeding luxury homes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedLuxuryHomes();