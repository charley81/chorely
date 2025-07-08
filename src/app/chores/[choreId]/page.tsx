import Link from 'next/link';

import { Heading } from '@/components/heading';
import { Placeholer } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { initialChores } from '@/data';
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
        <Placeholer label="Chore not found" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Chore Page"
        description={`You are viewing ${chore.title}`}
      />

      <h3>{chore.title}</h3>
      <p>{chore.content}</p>
    </div>
  );
}
