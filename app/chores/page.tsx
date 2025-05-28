import { Heading } from '@/components/heading';
import { Suspense } from 'react';
import { ChoreList } from '@/features/chore/components/chore-list';
import { Spinner } from '@/components/spinner';
import { ErrorBoundary } from 'react-error-boundary';
import { Placeholder } from '@/components/placeholder';

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
