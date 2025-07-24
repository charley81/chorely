import { Suspense } from 'react';

import { Heading } from '@/components/heading';
import { Spinner } from '@/components/spinner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChoreCreateForm } from '@/features/chores/components/chore-create-form';
import { ChoreList } from '@/features/chores/components/chore-list';

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores Page" description="All your chores here" />

      <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle>Create Chore</CardTitle>
          <CardDescription>A new chore will be created</CardDescription>
        </CardHeader>
        <CardContent>
          <ChoreCreateForm />
        </CardContent>
      </Card>

      <Suspense fallback={<Spinner />}>
        <ChoreList />
      </Suspense>
    </div>
  );
}
