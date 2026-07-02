import { PrismaClient, Prisma } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { faker } from '@faker-js/faker';
import { UrlRecordCreateInput } from '@/generated/prisma/models';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

function generateFakeUrlRecord(): UrlRecordCreateInput {
  return {
    originURL: faker.internet.url(),
    shortURL: faker.internet.url(),
    urlCode: faker.string.uuid().slice(0, 6),
  };
}

const urlRecordData: Prisma.UrlRecordCreateInput[] = [
  generateFakeUrlRecord(),
  generateFakeUrlRecord(),
  generateFakeUrlRecord(),
  generateFakeUrlRecord(),
];

export async function main() {
  for (const urlRecord of urlRecordData) {
    await prisma.urlRecord.create({ data: urlRecord });
  }
}

main();
