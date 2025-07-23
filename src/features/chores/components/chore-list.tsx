import { ChoreItem } from '@/features/chores/components/chore-item';
import { getChores } from '@/features/chores/queries/get-chores';

export async function ChoreList() {
  const chores = await getChores();

  return (
    <div className="animate-fade-in-from-top flex flex-col items-center gap-y-8">
      {chores.map((chore) => (
        <ChoreItem key={chore.id} chore={chore} isDetail />
      ))}
    </div>
  );
}
