import { Suspense } from 'react';

import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import { ChoreList } from '@/features/chores/components/chore-list';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />
      <Suspense fallback={<Spinner />}>
        <ChoreList />
      </Suspense>
    </div>
  );
}
