import { Suspense } from 'react';

import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { ChoreCreateForm } from '@/features/chores/components/chore-create-form';
import { ChoreList } from '@/features/chores/components/chore-list';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />

      <CardCompact
        title="Create Chore"
        description="A new chore will be created"
        content={<ChoreCreateForm />}
        className="w-full max-w-[420px] self-center"
      />

      <Suspense fallback={<Spinner />}>
        <ChoreList />
      </Suspense>
    </div>
  );
}
