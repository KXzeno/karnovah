import { PrismaClient } from "@prisma/client";

// Instantiate Prisma Client by defining global Prisma instance
// A way to prevent creating multiple instances of Prisma client in application
// Which leads to performance issues or errors

// Declare global variable Prisma of type PrismaClient or undefined
declare global {
  var prisma: PrismaClient | undefined;
};

// export a database variable that's either an existing global Prisma instance or a new one
export const db = globalThis.prisma || new PrismaClient();

// If environment is not in production, assign the database variable to the global Prisma variable
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma === db;
}
