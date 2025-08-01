'use client';

import { useActionState, useRef } from 'react';

import { DatePicker } from '@/components/date-picker';
import { FieldError } from '@/components/form/field-error';
import { Form } from '@/components/form/form';
import { SubmitButton } from '@/components/form/submit-button';
import {
  ActionState,
  EMPTY_ACTION_STATE,
} from '@/components/form/utils/to-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Chore } from '@/generated/prisma/client';

import { upsertChore } from '../actions/upsert-chore';

type ChoreUpsertFormProps = {
  chore?: Chore;
};

type ImperativeHandleFromDatePicker = {
  reset: () => void;
};

export function ChoreUpsertForm({ chore }: ChoreUpsertFormProps) {
  const [actionState, action] = useActionState<ActionState, FormData>(
    upsertChore.bind(null, chore?.id),
    EMPTY_ACTION_STATE,
  );

  const datePickerImperativeHandleRef = useRef<ImperativeHandleFromDatePicker>(
    null!,
  );

  const handleSuccess = () => {
    datePickerImperativeHandleRef.current?.reset();
  };

  return (
    <Form action={action} actionState={actionState} onSuccess={handleSuccess}>
      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get('title') as string) ?? chore?.title
        }
      />
      <FieldError actionState={actionState} name="title" />

      <Label htmlFor="content">Conent</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get('content') as string) ?? chore?.content
        }
      />
      <FieldError actionState={actionState} name="content" />

      <div className="mb-1 flex gap-x-2">
        <div className="w-1/2">
          <Label htmlFor="deadline">Deadline</Label>
          <DatePicker
            imperativeHandleRef={datePickerImperativeHandleRef}
            id="deadline"
            name="deadline"
            defaultValue={
              (actionState.payload?.get('deadline') as string) ??
              chore?.deadline
            }
          />
        </div>
        <div className="w-1/2">
          <Label htmlFor="bounty">Bounty</Label>
          <Input
            id="bounty"
            name="bounty"
            defaultValue={
              (actionState.payload?.get('bounty') as string) ?? chore?.bounty
            }
          />
        </div>
      </div>

      {<SubmitButton label={chore ? 'Edit' : 'Create'} />}
    </Form>
  );
}
