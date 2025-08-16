// backend/prisma/prisma.config.ts
export default {
  seed: {
    // --transpile-only ajuda o ts-node a rodar sem compilar no tsc
    run: 'ts-node --transpile-only prisma/seed.ts',
  },
} as const;
