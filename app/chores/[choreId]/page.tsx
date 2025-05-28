import { choresPath } from '@/app/utils/paths';
import { Placeholder } from '@/components/placeholder';
import { Button } from '@/components/ui/button';
import { ChoreItem } from '@/features/chore/components/chore-item';
import { getChore } from '@/features/chore/queries/get-chore';
import Link from 'next/link';

type ChoresPageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function ChorePage({ params }: ChoresPageProps) {
  const { choreId } = await params;
  const chore = await getChore(choreId);

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
