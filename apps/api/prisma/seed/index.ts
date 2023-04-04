import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const seeds: Promise<void>[] = []

Promise.all(seeds)
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })
