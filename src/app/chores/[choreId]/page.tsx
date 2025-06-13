import Link from 'next/link';

import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialChores } from '@/data';
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
      <div className="flex flex-1">
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
    <div className="animate-fade-in-from-top mt-40">
      <h2 className="text-2xl font-bold">{chore.title}</h2>
      <p className="">{chore.conent}</p>
    </div>
  );
}
