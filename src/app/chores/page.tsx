import { Heading } from '@/components/heading';
import { ChoreItem } from '@/features/chores/components/chore-item';
import { getChores } from '@/features/chores/queries/get-chores';

export default async function ChoresPage() {
  const chores = await getChores();

  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />

      <div className="animate-fade-in-from-top flex flex-col items-center gap-y-8">
        {chores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} isDetail />
        ))}
      </div>
    </div>
  );
}
