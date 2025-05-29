import { Heading } from '@/app/components/heading';
import { Suspense } from 'react';
import { ChoreList } from '@/app/features/chore/components/chore-list';
import { Spinner } from '@/app/components/spinner';
import { ErrorBoundary } from 'react-error-boundary';
import { Placeholder } from '@/app/components/placeholder';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores" description="A place for all your chores" />

      <ErrorBoundary fallback={<Placeholder label="something went wrong" />}>
        <Suspense fallback={<Spinner />}>
          <ChoreList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
