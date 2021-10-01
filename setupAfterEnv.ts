// This file file tells Jest to mock a default export (the Prisma client
// instantiated in ./client.ts), and uses the mockDeep method from
// jest-mock-extended to enable access to the objects and methods available on
// the Prisma client. It then resets the mocked instance before each test is
// run.
import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset } from 'jest-mock-extended';
import { DeepMockProxy } from 'jest-mock-extended/lib/cjs/Mock';

import prisma from './client';

jest.mock('./client', () => ({
  __esModule: true,

  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
