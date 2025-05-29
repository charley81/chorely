import { choresPath } from '@/app/utils/paths';
import { Placeholder } from '@/app/components/placeholder';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1">
      <Placeholder
        label="Chore not found"
        button={
          <Button asChild variant="outline" className="mt-4">
            <Link href={choresPath()}>Go back to chores</Link>
          </Button>
        }
      />
    </div>
  );
}
