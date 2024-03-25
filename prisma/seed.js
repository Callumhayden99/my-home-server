import { PrismaClient } from '@prisma/client';

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
      title: 'Grand Mansion',
      description: 'A grand mansion with opulent interiors',
      price: 7500000.00,
      address: '963 Royal Estate',
      city: 'Newport Beach',
      country: 'USA',
      homeType: 'MANSION',
      bedrooms: 12,
      bathrooms: 14,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 22000,
      yearBuilt: 1995,
      imageUrl: 'https://i.imgur.com/rycq7wD.jpg',
    },
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
      imageUrl: 'https://i.imgur.com/LTco9Ao.jpg',
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
      imageUrl: 'https://i.imgur.com/jLYO0Tu.png',
    },
    {
      title: 'Elegant Mansion',
      description: 'A grand mansion with exquisite architecture',
      price: 5500000.00,
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
    {
      title: 'Cozy Bungalow',
      description: 'A charming bungalow with a warm and inviting atmosphere',
      price: 750000.00,
      address: '321 Cozy Street',
      city: 'San Diego',
      country: 'USA',
      homeType: 'BUNGALOW',
      bedrooms: 3,
      bathrooms: 2,
      hasGarden: true,
      hasGarage: false,
      sqftArea: 1500,
      yearBuilt: 1995,
      imageUrl: 'https://i.imgur.com/39UL40A.jpg',
    },
    {
      title: 'Modern Apartment',
      description: 'A contemporary apartment with stunning city views',
      price: 1200000.00,
      address: '654 Urban Tower',
      city: 'Chicago',
      country: 'USA',
      homeType: 'APARTMENT',
      bedrooms: 2,
      bathrooms: 2,
      hasGarden: false,
      hasGarage: true,
      sqftArea: 1200,
      yearBuilt: 2018,
      imageUrl: 'https://i.imgur.com/7CRrOqH.jpg',
    },
    {
      title: 'Spacious Villa',
      description: 'A spacious villa with luxurious amenities',
      price: 3200000.00,
      address: '987 Villa Lane',
      city: 'Miami',
      country: 'USA',
      homeType: 'VILLA',
      bedrooms: 6,
      bathrooms: 7,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 7500,
      yearBuilt: 2012,
      imageUrl: 'https://i.imgur.com/IcCP5En.png',
    },
    {
      title: 'Rustic Mansion',
      description: 'A magnificent mansion with rustic charm',
      price: 4800000.00,
      address: '741 Country Estate',
      city: 'Aspen',
      country: 'USA',
      homeType: 'MANSION',
      bedrooms: 9,
      bathrooms: 10,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 15000,
      yearBuilt: 2000,
      imageUrl: 'https://i.imgur.com/aJjt57G.jpg',
    },
    {
      title: 'Luxury Penthouse',
      description: 'A luxurious penthouse with breathtaking ocean views',
      price: 3500000.00,
      address: '852 Seascape Tower',
      city: 'Honolulu',
      country: 'USA',
      homeType: 'PENTHOUSE',
      bedrooms: 5,
      bathrooms: 5,
      hasGarden: false,
      hasGarage: true,
      sqftArea: 4000,
      yearBuilt: 2016,
      imageUrl: 'https://i.imgur.com/m7mhWz3.png',
    },
    {
      title: 'Charming Bungalow',
      description: 'A delightful bungalow with a beautiful garden',
      price: 900000.00,
      address: '159 Garden Lane',
      city: 'Seattle',
      country: 'USA',
      homeType: 'BUNGALOW',
      bedrooms: 4,
      bathrooms: 3,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 2200,
      yearBuilt: 1998,
      imageUrl: 'https://i.imgur.com/Zzv6JL6.jpg',
    },
    {
      title: 'Historic Mansion',
      description: 'A historic mansion with timeless elegance',
      price: 6500000.00,
      address: '753 Heritage Estate',
      city: 'Boston',
      country: 'USA',
      homeType: 'MANSION',
      bedrooms: 10,
      bathrooms: 12,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 18000,
      yearBuilt: 1920,
      imageUrl: 'https://i.imgur.com/OtuRFGo.png',
    },
    {
      title: 'Stylish Apartment',
      description: 'A stylish apartment in a prime location',
      price: 1500000.00,
      address: '963 Uptown Avenue',
      city: 'San Francisco',
      country: 'USA',
      homeType: 'APARTMENT',
      bedrooms: 3,
      bathrooms: 3,
      hasGarden: false,
      hasGarage: true,
      sqftArea: 1800,
      yearBuilt: 2020,
      imageUrl: 'https://i.imgur.com/gVUjPZo.jpg',
    },
    {
      title: 'Majestic Villa',
      description: 'A majestic villa with breathtaking mountain views',
      price: 4200000.00,
      address: '741 Mountain View',
      city: 'Denver',
      country: 'USA',
      homeType: 'VILLA',
      bedrooms: 7,
      bathrooms: 8,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 9000,
      yearBuilt: 2008,
      imageUrl: 'https://i.imgur.com/499GOkE.jpg',
    },
    {
      title: 'Exquisite Penthouse',
      description: 'An exquisite penthouse with unparalleled luxury',
      price: 4500000.00,
      address: '852 Skyline Boulevard',
      city: 'Las Vegas',
      country: 'USA',
      homeType: 'PENTHOUSE',
      bedrooms: 6,
      bathrooms: 6,
      hasGarden: false,
      hasGarage: true,
      sqftArea: 5500,
      yearBuilt: 2014,
      imageUrl: 'https://i.imgur.com/FFZUuXM.png',
    },
    {
      title: 'Coastal Bungalow',
      description: 'A charming bungalow with stunning coastal views',
      price: 1100000.00,
      address: '753 Coastal Breeze',
      city: 'Santa Barbara',
      country: 'USA',
      homeType: 'BUNGALOW',
      bedrooms: 3,
      bathrooms: 3,
      hasGarden: true,
      hasGarage: true,
      sqftArea: 1800,
      yearBuilt: 2002,
      imageUrl: 'https://i.imgur.com/FUglomC.jpg',
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