import { initialChores } from '@/app/utils/data';
import { Chore } from '../types';

export const getChore = async (choreId: string): Promise<Chore | null> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const chore = initialChores.find((chore) => chore.id === choreId);

  return new Promise((resolve) => {
    resolve(chore || null);
  });
};
