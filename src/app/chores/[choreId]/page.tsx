import { notFound } from 'next/navigation';

import { ChoreItem } from '@/features/chores/components/chore-item';
import { getChore } from '@/features/chores/queries/get-chore';

type ChorePageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function ChorePage({ params }: ChorePageProps) {
  const { choreId } = await params;

  const chore = await getChore(choreId);

  if (!chore) {
    notFound();
  }

  return (
    <>
      <div className="--animate-fade-in-from-top flex justify-center">
        <ChoreItem chore={chore} isDetail />
      </div>
    </>
  );
}
