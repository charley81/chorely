import prisma from '@/lib/prisma';

export const getChores = async () => {
  try {
    return await prisma.chore.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });
  } catch (error) {
    console.log('Prisma Error: ', error);
  }
};
