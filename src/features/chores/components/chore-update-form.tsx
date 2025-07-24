import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Chore } from '@/generated/prisma/client';

import { updateChore } from '../actions/update-chore';

type ChoreCreateFormProps = {
  chore: Chore;
};

export function ChoreUpdateForm({ chore }: ChoreCreateFormProps) {
  return (
    <form
      action={updateChore.bind(null, chore.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={chore.title} />

      <Label>Conent</Label>
      <Textarea id="content" name="content" defaultValue={chore.content} />

      <Button type="submit">Update</Button>
    </form>
  );
}
