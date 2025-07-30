'use server';

import { verify } from '@node-rs/argon2';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from '@/components/form/utils/to-action-state';
import prisma from '@/lib/prisma';
import { choresPath } from '@/paths';

const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Is Required' })
    .max(191)
    .pipe(z.email()),
  password: z.string().min(6).max(191),
});

export const signIn = async (_actionState: ActionState, formData: FormData) => {
  try {
    const { email, password } = signInSchema.parse(
      Object.fromEntries(formData),
    );

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return toActionState('ERROR', 'User not found');
    }

    const validPassword = await verify(user.passwordHash, password);

    if (!validPassword) {
      return toActionState('ERROR', 'Invalid password');
    }
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect(choresPath());
};
