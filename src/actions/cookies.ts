'use server';
import { cookies } from 'next/headers';

export const getCookieByKey = async (key: string) => {
  const cookieStore = await cookies();

  if (!cookieStore) {
    return null;
  }

  return cookieStore.get(key)?.value;
};

export const setCookieByKey = async (key: string, value: string) => {
  const cookieStore = await cookies();
  cookieStore.set(key, value);
};

export const deleteCookieByKey = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
