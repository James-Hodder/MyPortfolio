import { PrismaClient } from "@prisma/client";

// Use globalThis for better compatibility (ESM, Next.js)
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;
