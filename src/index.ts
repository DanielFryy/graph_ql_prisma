import { PrismaClient } from '@prisma/client';
import { inspect } from 'util';

const prisma = new PrismaClient();

async function main() {
  const allUsers = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      posts: {
        select: {
          title: true,
        },
      },
      comments: true,
    },
  });
  console.log(inspect(allUsers, { depth: null, colors: true }));
}

main()
  .catch(e => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
