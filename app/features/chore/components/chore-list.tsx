import { getChores } from '@/app/features/chore/queries/get-chores';
import { ChoreItem } from './chore-item';

export async function ChoreList() {
  const chores = await getChores();

  return (
    <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
      {chores.map((chore) => (
        <ChoreItem key={chore.id} chore={chore} />
      ))}
    </div>
  );
}
