import { PrismaClient } from '@prisma/client';
import { inspect } from 'util';

const prisma = new PrismaClient({ log: ['query'] });

// create a post for user function
// connect the post with that user
// return the posts's author
// check if the user exists, otherwise throw an error
// enable cascade deletions

async function main() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     email: 'pepito.arcoiris@gmail.com',
  //     name: 'Pepito',
  //   },
  // });
  try {
    
    const post = await prisma.post.create({
      data: {
        published: true,
        title: 'hello2',
        body: 'world2',
        author: { connect: { id: 8 } },
      },
      select: { title: true, author: { select: { name: true } } },
    });
  
    console.log(inspect(post, { depth: null, colors: true }));
  
    const allUsers = await prisma.user.findMany({
      // select: {
      //   id: true,
      //   email: true,
      //   name: true,
      //   posts: {
      //     select: {
      //       title: true,
      //     },
      //   },
      //   comments: true,
      // },
    });
    console.log(inspect(allUsers, { depth: null, colors: true }));
  } catch (error) {
    console.log("myError", error);
  }

}

main()
  .catch(e => {
    throw e;
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
