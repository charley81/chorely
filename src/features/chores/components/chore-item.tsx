import clsx from 'clsx';
import {
  LucideEllipsisVertical,
  LucideExternalLink,
  LucidePencil,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAuthOrRedirect } from '@/features/auth/queries/get-auth-or-redirect';
import { isOwner } from '@/features/utils/is-owner';
import { Prisma } from '@/generated/prisma/client';
import { choreEditPath, chorePath } from '@/paths';
import { toCurrencyFromCent } from '@/utils/currency';

import { CHORE_ICONS } from '../constants';
import { ChoreMoreMenu } from './chore-more-menu';

type ChoreItemProps = {
  chore: Prisma.ChoreGetPayload<{
    include: {
      user: {
        select: {
          username: true;
        };
      };
    };
  }>;
  isDetail?: boolean;
};

export async function ChoreItem({ chore, isDetail }: ChoreItemProps) {
  const { user } = await getAuthOrRedirect();
  const isChoreOwner = isOwner(user, chore);

  const editButton = isChoreOwner ? (
    <Button asChild size="icon" variant="outline">
      <Link href={choreEditPath(chore.id)}>
        <LucidePencil className="h-4 w-4" />
      </Link>
    </Button>
  ) : null;

  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link prefetch href={chorePath(chore.id)}>
        <LucideExternalLink className="h-4 w-4" />
      </Link>
    </Button>
  );

  const moreMenu = isChoreOwner ? (
    <ChoreMoreMenu
      chore={chore}
      trigger={
        <Button size="icon" variant="outline">
          <LucideEllipsisVertical />
        </Button>
      }
    />
  ) : null;

  return (
    <div
      className={clsx('flex w-full flex-1 gap-x-1', {
        'max-w-[420px]': !isDetail,
        'max-w-[620px]': isDetail,
      })}
    >
      <Card key={chore.id} className="w-full">
        <CardHeader className="flex gap-x-2">
          <CardTitle className="truncate">{chore.title}</CardTitle>
          <span>{CHORE_ICONS[chore.status]}</span>
        </CardHeader>
        <CardContent>
          <span
            className={clsx('truncate whitespace-break-spaces', {
              'line-through': chore.status === 'DONE',
              'line-clamp-3': isDetail,
            })}
          >
            {chore.content}
          </span>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-muted-foreground text-sm">
            {chore.deadline} by {chore.user.username}
          </p>
          <p className="text-muted-foreground text-sm">
            {toCurrencyFromCent(chore.bounty)}
          </p>
        </CardFooter>
      </Card>

      <div className="flex flex-col gap-y-1">
        {isDetail ? (
          <>
            {editButton}
            {moreMenu}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
}
