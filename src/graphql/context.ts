import { PrismaClient } from "@prisma/client"

// add prisma to the NodeJS global type
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace NodeJS {
  class Global {
    prisma?: PrismaClient
  }
}

declare const global: NodeJS.Global & { prisma?: PrismaClient }

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === "development") global.prisma = prisma

export interface Context {
  prisma: PrismaClient
}

export function createContext(): Context {
  return {
    prisma,
  }
}
