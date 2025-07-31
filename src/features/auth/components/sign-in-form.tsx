'use client';

import { useActionState } from 'react';

import { FieldError } from '@/components/form/field-error';
import { Form } from '@/components/form/form';
import { SubmitButton } from '@/components/form/submit-button';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signIn } from '../actions/sign-in';

export function SignInForm() {
  const [actionState, action] = useActionState(signIn, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <span>
        <Label htmlFor="email" className="mb-2">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          placeholder="email"
          type="email"
          defaultValue={actionState.payload?.get('email') as string}
        />
        <FieldError actionState={actionState} name="email" />
      </span>
      <span>
        <Label htmlFor="password" className="mb-2">
          Password
        </Label>
        <Input
          name="password"
          id="password"
          placeholder="password"
          type="password"
          defaultValue={actionState.payload?.get('password') as string}
        />
        <FieldError actionState={actionState} name="password" />
      </span>

      <SubmitButton label="Sign In" />
    </Form>
  );
}
