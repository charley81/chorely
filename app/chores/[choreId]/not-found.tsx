import { choresPath } from '@/app/utils/paths';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1">
      <Placeholder
        label="Chore not found"
        button={
          <Button asChild variant="outline">
            <Link href={choresPath()}>Go back to chores</Link>
          </Button>
        }
      />
      <Placeholder label="Chore not found" />
    </div>
  );
}
