import { Heading } from '@/components/heading';
import { ChoreItem } from '@/features/chore/components/chore-item';
import { getChores } from '@/features/queries/get-chores';

export default async function ChoresPage() {
  const chores = await getChores();
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores" description="A place for all your chores" />

      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {chores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
}
