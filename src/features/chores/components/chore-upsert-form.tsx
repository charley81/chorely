'use client';

import { useActionState } from 'react';

import { SubmitButton } from '@/components/form/submit-button';
import { ActionState } from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Chore } from '@/generated/prisma/client';

import { upsertChore } from '../actions/upsert-chore';

type ChoreUpsertFormProps = {
  chore?: Chore;
};

export function ChoreUpsertForm({ chore }: ChoreUpsertFormProps) {
  const [actionState, action] = useActionState<ActionState, FormData>(
    upsertChore.bind(null, chore?.id),
    {
      message: '',
      fieldErrors: {},
      payload: undefined,
    },
  );
  return (
    <form action={action} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get('title') as string) ?? chore?.title
        }
      />

      <Label>Conent</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get('content') as string) ?? chore?.content
        }
      />
      {<SubmitButton label={chore ? 'Edit' : 'Create'} />}
      {actionState.message}
    </form>
  );
}
