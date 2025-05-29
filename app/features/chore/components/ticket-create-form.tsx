import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';

export function TicketCreateForm() {
  return (
    <form action="" className="flex flex-col gap-y-2 ">
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" />

      <Label>Content</Label>
      <Textarea id="content" name="content" />

      <Button type="submit">Create</Button>
    </form>
  );
}
