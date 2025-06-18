import { Heading } from '@/components/heading';
import { initialChores } from '@/data';
import { ChoreItem } from '@/features/chore/components/chore-item';

export default function ChoresPage() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Heading title="Chores Page" description="A list of all your chores" />
      <div className="mt-20 flex w-full flex-col items-center gap-y-4">
        {initialChores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
}
