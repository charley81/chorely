'use client';

import { LucideTrash } from 'lucide-react';
import { toast } from 'sonner';

import { ConfirmDialog } from '@/components/confirm-dialog';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Chore, ChoreStatus } from '@/generated/prisma';

import { deleteChore } from '../actions/delete-chore';
import { updateChoreStatus } from '../actions/update-chore-status';
import { CHORE_STATUS_LABELS } from '../constants';

type ChoreMoreMenuProps = {
  chore: Chore;
  trigger: React.ReactNode;
};

export function ChoreMoreMenu({ chore, trigger }: ChoreMoreMenuProps) {
  const deleteButton = (
    <ConfirmDialog
      action={deleteChore.bind(null, chore.id)}
      trigger={
        <Button size="icon" variant="outline" className="flex w-full gap-x-1">
          <LucideTrash className="h-4 w-4" />
          <span>Delete</span>
        </Button>
      }
    />
  );

  const handleUpdateChoreStatus = async (value: string) => {
    const promise = updateChoreStatus(chore.id, value as ChoreStatus);

    toast.promise(promise, {
      loading: 'Updating status...',
    });

    const result = await promise;

    if (result.status === 'ERROR') {
      toast.error(result.message);
    } else if (result.status === 'SUCCESS') {
      toast.success(result.message);
    }
  };

  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup
      value={chore.status}
      onValueChange={handleUpdateChoreStatus}
    >
      {(Object.keys(CHORE_STATUS_LABELS) as Array<ChoreStatus>).map((key) => (
        <DropdownMenuRadioItem key={key} value={key}>
          {CHORE_STATUS_LABELS[key]}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        {ticketStatusRadioGroupItems}
        <DropdownMenuSeparator />
        {deleteButton}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
