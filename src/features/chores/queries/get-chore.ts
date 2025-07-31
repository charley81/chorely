import prisma from '@/lib/prisma';

export const getChore = async (id: string) => {
  try {
    return await prisma.chore.findUnique({
      where: {
        id: id.trim(),
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
    console.error('Prisma Error: ', error);
  }
};
