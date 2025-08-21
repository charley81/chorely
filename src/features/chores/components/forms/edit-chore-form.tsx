import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Chore } from '@/generated/prisma'

import { editChore } from '../../actions/edit-chore'

type EditChoreFormProps = {
  chore: Chore
}

export function EditChoreForm({ chore }: EditChoreFormProps) {
  const editChoreWithId = editChore.bind(null, chore.id)
  return (
    <form action={editChoreWithId} className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="add title..."
          name="title"
          defaultValue={chore.title}
          required
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor="content">Description</Label>
        <Textarea
          id="content"
          placeholder="add description..."
          name="content"
          defaultValue={chore.content}
          required
        />
      </div>
      <Button type="submit">Edit</Button>
    </form>
  )
}
