'use client';

import { SubmitButton } from '@/components/form/submit-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Chore } from '@/generated/prisma/client';

import { upsertChore } from '../actions/upsert-chore';

type ChoreUpsertFormProps = {
  chore?: Chore;
};

export function ChoreUpsertForm({ chore }: ChoreUpsertFormProps) {
  return (
    <form
      action={upsertChore.bind(null, chore?.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={chore?.title} />

      <Label>Conent</Label>
      <Textarea id="content" name="content" defaultValue={chore?.content} />
      {<SubmitButton label={chore ? 'Edit' : 'Create'} />}
    </form>
  );
}
