import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';
import { Chore } from '@/app/generated/prisma';
import { upsertChore } from '../actions/upsert-chore';

type UpdateChoreFormProps = {
  chore?: Chore;
};

export default function UpdateChoreForm({ chore }: UpdateChoreFormProps) {
  return (
    <form
      action={upsertChore.bind(null, chore?.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={chore?.title} />

      <Label>Content</Label>
      <Textarea id="content" name="content" defaultValue={chore?.content} />

      <Button type="submit">{chore ? 'Edit' : 'Create'} Chore</Button>
    </form>
  );
}
