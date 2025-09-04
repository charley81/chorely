'use client'

import { useActionState } from 'react'

import { FieldError } from '@/components/form/field-error'
import { useActionFeedback } from '@/components/form/hooks/use-action-feedback'
import { SubmitButton } from '@/components/form/submit-button'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Chore } from '@/generated/prisma'

import { upsertChore } from '../actions/upsert-chore'

type ChoreUpsertFormProps = {
  chore?: Chore
}

export function ChoreUpsertForm({ chore }: ChoreUpsertFormProps) {
  const [actionState, action] = useActionState(
    upsertChore.bind(null, chore?.id),
    EMPTY_ACTION_STATE,
  )

  useActionFeedback({
    actionState,
    options: {
      onSuccess: ({ actionState }) => {
        console.log(actionState?.message)
      },
      onError: ({ actionState }) => {
        console.log(actionState?.message)
      },
    },
  })

  return (
    <form action={action} className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="add title..."
          name="title"
          defaultValue={
            (actionState?.payload?.get('title') as string) ?? chore?.title
          }
        />
        <FieldError actionState={actionState} name="title" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="content">Description</Label>
        <Textarea
          id="content"
          placeholder="add description..."
          name="content"
          defaultValue={
            (actionState?.payload?.get('content') as string) ?? chore?.content
          }
        />
        <FieldError actionState={actionState} name="content" />
      </div>
      <SubmitButton label={chore ? 'Edit' : 'Create'} />
    </form>
  )
}
