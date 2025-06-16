import { Heading } from '@/components/heading';
import { initialChores } from '@/data';
import { ChoreItem } from '@/features/chore/components/chore-item';

export default function ChoresPage() {
  return (
    <div>
      <Heading title="Chores Page" description="A list of all your chores" />
      <div className="mt-20 flex max-w-2xl flex-col gap-y-4">
        {initialChores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
}
