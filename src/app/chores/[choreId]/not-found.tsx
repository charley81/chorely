import Link from 'next/link';

import { Placeholer } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { choresPath } from '@/paths';

export default function NotFound() {
  return (
    <div className="flex flex-1">
      <Placeholer
        label="Chore not found"
        button={
          <Button asChild variant="outline">
            <Link href={choresPath()}>Back to chores</Link>
          </Button>
        }
      />
    </div>
  );
}
