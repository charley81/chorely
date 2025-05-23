import { initialChores } from '@/app/utils/data';
import { choresPath } from '@/app/utils/paths';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { ChoreItem } from '@/features/chore/components/chore-item';
import Link from 'next/link';

type ChoresPageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function ChorePage({ params }: ChoresPageProps) {
  const { choreId } = await params;
  const chore = initialChores.find((chore) => chore.id === choreId);

  if (!chore) {
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
  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <ChoreItem chore={chore} isDetail />
    </div>
  );
}
