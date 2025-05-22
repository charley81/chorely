import { LucideCircleCheck, LucideFile, LucidePencil } from 'lucide-react';
import Link from 'next/link';

import { initialChores } from '@/app/utils/data';
import { Heading } from '@/components/heading';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { chorePath } from '../utils/paths';

const CHORE_ICONS = {
  OPEN: <LucideFile />,
  DONE: <LucideCircleCheck />,
  IN_PROGRESS: <LucidePencil />,
};

export default function ChoresPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Chores" description="A place for all your chores" />
      <div className="flex flex-1 flex-col items-center gap-y-4 animate-fade-in-from-top">
        {initialChores.map((chore) => (
          <Card key={chore.id} className="w-full max-w-[648px]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <span>{CHORE_ICONS[chore.status]}</span>
                <h3 className="truncate">{chore.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {chore.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={chorePath(chore.id)} className="underline">
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
