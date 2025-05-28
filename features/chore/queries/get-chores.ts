import { initialChores } from '@/app/utils/data';
import { Chore } from '../types';

export const getChores = async (): Promise<Chore[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return new Promise((resolve) => {
    resolve(initialChores);
  });
};
