import { Suspense } from 'react';
import { ChoreList } from '@/app/features/chore/components/chore-list';
import { Spinner } from '@/app/components/spinner';
import { ErrorBoundary } from 'react-error-boundary';
import { Placeholder } from '@/app/components/placeholder';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '../components/ui/card';
import { TicketCreateForm } from '../features/chore/components/ticket-create-form';

export default function ChoresPage() {
  return (
    <div className="flex flex-col gap-y-8 max-w-[768px] w-full">
      <Card>
        <CardHeader>
          <CardTitle>Create Chore</CardTitle>
          <CardDescription>New chore will be created</CardDescription>
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card>

      <ErrorBoundary fallback={<Placeholder label="something went wrong" />}>
        <Suspense fallback={<Spinner />}>
          <ChoreList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
