import prisma from '../../client';

export const getFirstName = (fullName: string) => {
  const [firstName] = fullName.split(' ');
  return firstName;
};

export const createUser = async (user: CreateUser) => {
  if (user.acceptTermsAndConditions) {
    return await prisma.user.create({
      data: user,
    });
  } else {
    return new Error('User must accept terms!');
  }
};

export const updateUsername = async (user: UpdateUser) => {
  return await prisma.user.update({
    where: { id: user.id },
    data: user,
  });
};
