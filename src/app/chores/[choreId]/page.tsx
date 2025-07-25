import { notFound } from 'next/navigation';

import { ChoreItem } from '@/features/chores/components/chore-item';
import { getChore } from '@/features/chores/queries/get-chore';

type ChorePageProps = {
  params: Promise<{ choreId: string }>;
};

export const dynamic = 'force-dynamic';

export default async function ChorePage({ params }: ChorePageProps) {
  const { choreId } = await params;
  console.log('Production choreId: ', choreId);

  const chore = await getChore(choreId);
  console.log('fetched chore: ', chore);

  if (!chore) {
    console.log('chore not found for ID: ', choreId);
    notFound();
  }

  return (
    <div className="--animate-fade-in-from-top flex justify-center">
      <ChoreItem chore={chore} isDetail />
    </div>
  );
}
