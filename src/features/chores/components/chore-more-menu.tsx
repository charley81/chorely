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

  const ticketStatusRadioGroupItems = (
    <DropdownMenuRadioGroup value={chore.status}>
      {(Object.keys(CHORE_STATUS_LABELS) as Array<ChoreStatus>).map((key) => (
        <DropdownMenuRadioItem key={key} value="key">
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
