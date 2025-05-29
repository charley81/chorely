import { ChoreItem } from '@/app/features/chore/components/chore-item';
import { getChore } from '@/app/features/chore/queries/get-chore';
import { notFound } from 'next/navigation';

type ChoresPageProps = {
  params: Promise<{ choreId: string }>;
};

export default async function ChorePage({ params }: ChoresPageProps) {
  const { choreId } = await params;
  const chore = await getChore(choreId);

  if (!chore) {
    notFound();
  }
  return (
    <div className="flex justify-center animate-fade-in-from-top mt-16 w-full">
      <ChoreItem chore={chore} isDetail />
    </div>
  );
}
