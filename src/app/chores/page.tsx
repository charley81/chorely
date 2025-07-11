import { Heading } from '@/components/heading';
import { initialChores } from '@/data';
import { ChoreItem } from '@/features/chores/components/chore-item';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />

      <div className="animate-fade-in-from-top flex flex-col items-center gap-y-8">
        {initialChores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} isDetail />
        ))}
      </div>
    </div>
  );
}
