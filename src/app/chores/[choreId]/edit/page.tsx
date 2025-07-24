import { notFound } from 'next/navigation';

import { CardCompact } from '@/components/card-compact';
import { ChoreUpdateForm } from '@/features/chores/components/chore-update-form';
import { getChore } from '@/features/chores/queries/get-chore';

type ChoreEditPageProps = {
  params: {
    choreId: string;
  };
};

export default async function ChoreEditPage({ params }: ChoreEditPageProps) {
  const chore = await getChore(params.choreId);

  if (!chore) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Edit Chore"
        description="This chore will be edited"
        content={<ChoreUpdateForm chore={chore} />}
        className="animate-fade-in-from-top w-full max-w-[420px]"
      />
    </div>
  );
}
