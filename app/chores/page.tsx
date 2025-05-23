import { initialChores } from '@/app/utils/data';
import { Heading } from '@/components/heading';
import { ChoreItem } from '@/features/chore/components/chore-item';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores" description="A place for all your chores" />
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialChores.map((chore) => (
          <ChoreItem key={chore.id} chore={chore} />
        ))}
      </div>
    </div>
  );
}
