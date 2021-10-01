import { createUser, getFirstName, updateUsername } from '../src/utils/user';
import { prismaMock } from './../setupAfterEnv';

test('should return first name when given fullName', () => {
  const firstName = getFirstName('Daniel Freire');
  expect(firstName).toEqual('Daniel');
});

test('should create new user ', async () => {
  const user = {
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
    acceptTermsAndConditions: true,
  };

  prismaMock.user.create.mockResolvedValue(user);

  await expect(createUser(user)).resolves.toEqual({
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
    acceptTermsAndConditions: true,
  });
});

// test('should update a users name ', async () => {
//   const user = {
//     id: 1,
//     name: 'Rich Haines',
//     email: 'hello@prisma.io',
//   };

//   prismaMock.user.update.mockResolvedValue(user);

//   await expect(updateUsername(user)).resolves.toEqual({
//     id: 1,
//     name: 'Rich Haines',
//     email: 'hello@prisma.io',
//   });
// });

// test('should fail if user does not accept terms', async () => {
//   const user = {
//     id: 1,
//     name: 'Rich Haines',
//     email: 'hello@prisma.io',
//     acceptTermsAndConditions: false,
//   };

//   prismaMock.user.create.mockRejectedValue(
//     new Error('User must accept terms!')
//   );

//   await expect(createUser(user)).resolves.toEqual(
//     new Error('User must accept terms!')
//   );
// });
