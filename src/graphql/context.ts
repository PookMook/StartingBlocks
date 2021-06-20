import { PrismaClient } from "@prisma/client"

let prisma: PrismaClient
// add prisma to the NodeJS global type

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

// Prevent multiple instances of Prisma Client in development
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export interface Context {
  prisma: PrismaClient
}

export function createContext(): Context {
  return {
    prisma,
  }
}
