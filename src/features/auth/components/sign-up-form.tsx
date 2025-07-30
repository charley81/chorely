'use client';

import { useActionState } from 'react';

import { FieldError } from '@/components/form/field-error';
import { Form } from '@/components/form/form';
import { SubmitButton } from '@/components/form/submit-button';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { signUp } from '../actions/sign-up';

export function SignUpForm() {
  const [actionState, action] = useActionState(signUp, EMPTY_ACTION_STATE);
  return (
    <Form action={action} actionState={actionState}>
      <span>
        <Label htmlFor="username" className="mb-2">
          Username
        </Label>
        <Input
          name="username"
          id="username"
          placeholder="username"
          defaultValue={actionState.payload?.get('username') as string}
        />
        <FieldError actionState={actionState} name="username" />
      </span>
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
      <span>
        <Label htmlFor="confirm-password" className="mb-2">
          Confirm Password
        </Label>
        <Input
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirm password"
          type="password"
          defaultValue={actionState.payload?.get('confirmPassword') as string}
        />
        <FieldError actionState={actionState} name="confirmPassword" />
      </span>

      <SubmitButton label="Sign Up" />
    </Form>
  );
}
