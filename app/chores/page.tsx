import { Placeholder } from '@/app/components/placeholder';
import { Spinner } from '@/app/components/spinner';
import { CardCompact } from '@/app/features/chore/components/card-compact';
import { ChoreList } from '@/app/features/chore/components/chore-list';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ChoreUpsertForm from '../features/chore/components/chore-upsert-form';

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-8 max-w-[768px] w-full">
      <CardCompact
        title="Create Chore"
        description="New chore will be created"
        content={<ChoreUpsertForm />}
        className="animate-fade-in-from-top"
      />
      <ErrorBoundary fallback={<Placeholder label="something went wrong" />}>
        <Suspense fallback={<Spinner />}>
          <ChoreList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
