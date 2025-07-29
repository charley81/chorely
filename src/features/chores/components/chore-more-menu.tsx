'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Chore, ChoreStatus } from '@/generated/prisma';
import { LucideTrash } from 'lucide-react';
import { CHORE_STATUS_LABELS } from '../constants';
import { updateChoreStatus } from '../actions/update-chore-status';
import { toast } from 'sonner';

type ChoreMoreMenuProps = {
  chore: Chore;
  trigger: React.ReactNode;
};

export function ChoreMoreMenu({ chore, trigger }: ChoreMoreMenuProps) {
  const deleteButton = (
    <DropdownMenuItem>
      <LucideTrash className="mr-2 h-4 w-4" />
      <span>delete</span>
    </DropdownMenuItem>
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
