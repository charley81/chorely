import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { createTicket } from '../actions/create-chore';

export function ChoreCreateForm() {
  return (
    <form action={createTicket} className="flex flex-col gap-y-2">
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" />

      <Label>Conent</Label>
      <Textarea id="content" name="content" />

      <Button type="submit">Submit</Button>
    </form>
  );
}
