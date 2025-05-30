import { CardCompact } from '@/app/features/chore/components/card-compact';
import ChoreUpsertForm from '@/app/features/chore/components/chore-upsert-form';
import { getChore } from '@/app/features/chore/queries/get-chore';
import { notFound } from 'next/navigation';

type EditChorePageProps = {
  params: {
    choreId: string;
  };
};

export default async function EditChorePage({ params }: EditChorePageProps) {
  const { choreId } = params;
  const chore = await getChore(choreId);

  if (!chore) {
    notFound();
  }

  return (
    <div className="w-full">
      <CardCompact
        title="Edit Chore"
        description="This chore will be edited"
        content={<ChoreUpsertForm chore={chore} />}
        className="animate-fade-in-from-top"
      />
    </div>
  );
}
