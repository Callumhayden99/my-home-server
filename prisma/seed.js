import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedLuxuryHomes() {
  const luxuryHomes = [
    {
      title: 'Luxurious Villa',
      description: 'A stunning villa with breathtaking views',
      price: 1500000.00,
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
      imageUrl: 'https://example.com/images/villa.jpg',
    },
    {
      title: 'Modern Penthouse',
      description: 'A sleek and modern penthouse in the heart of the city',
      price: 2000000.00,
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
      imageUrl: 'https://example.com/images/penthouse.jpg',
    },
    // Add more luxury homes here...
  ];

  try {
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