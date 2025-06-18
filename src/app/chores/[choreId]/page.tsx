import Link from 'next/link';

import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialChores } from '@/data';
import { ChoreItem } from '@/features/chore/components/chore-item';
import { choresPath } from '@/path';

type SingleChorePageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function SingleChorePage({
  params,
}: SingleChorePageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
    return (
      <div className="flex w-full flex-1 justify-center">
        <Placeholder
          message="Chore not found"
          button={
            <Button variant="outline">
              <Link href={choresPath()}>Back to chores</Link>
            </Button>
          }
        />
        <Placeholder message="Chore not found" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in-from-top mx-auto mt-40 w-full max-w-3xl">
      <ChoreItem chore={chore} isDetail />
    </div>
  );
}
