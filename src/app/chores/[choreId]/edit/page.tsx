import { notFound } from 'next/navigation';

import { CardCompact } from '@/components/card-compact';
import { getAuth } from '@/features/auth/actions/get-auth';
import { ChoreUpsertForm } from '@/features/chores/components/chore-upsert-form';
import { getChore } from '@/features/chores/queries/get-chore';
import { isOwner } from '@/features/utils/is-owner';

type ChoreEditPageProps = {
  params: Promise<{
    choreId: string;
  }>;
};

export default async function ChoreEditPage({ params }: ChoreEditPageProps) {
  const { user } = await getAuth();
  const { choreId } = await params;
  const chore = await getChore(choreId);

  const isChoreOwner = isOwner(user, chore);

  if (!chore || !isChoreOwner) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Edit Chore"
        description="This chore will be edited"
        content={<ChoreUpsertForm chore={chore} />}
        className="animate-fade-in-from-top w-full max-w-[420px]"
      />
    </div>
  );
}
