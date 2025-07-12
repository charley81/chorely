import Link from 'next/link';

import { Placeholer } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialChores } from '@/data';
import { ChoreItem } from '@/features/chores/components/chore-item';
import { choresPath } from '@/paths';

type ChorePageProps = {
  params: {
    choreId: string;
  };
};

export default async function ChorePage({ params }: ChorePageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
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

  return (
    <div className="--animate-fade-in-from-top flex justify-center">
      <ChoreItem chore={chore} />
    </div>
  );
}
