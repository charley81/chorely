'use client';

import { format } from 'date-fns';
import { LucideCalendar } from 'lucide-react';
import { useImperativeHandle, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type DatePickerProps = {
  id: string;
  name: string;
  defaultValue?: string;
  imperativeHandleRef?: React.RefObject<{
    reset: () => void;
  }>;
};

export function DatePicker({
  id,
  name,
  defaultValue,
  imperativeHandleRef,
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );

  useImperativeHandle(imperativeHandleRef, () => ({
    reset: () => setDate(new Date()),
  }));
  const [open, setOpen] = useState(false);

  const formattedStringDate = date ? format(date, 'yyyy-MM-dd') : '';

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id={id} asChild className="w-full">
        <Button
          variant="outline"
          data-empty={!date}
          className="w-full justify-start text-left font-normal"
        >
          <LucideCalendar />
          {formattedStringDate}
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleSelect} />
      </PopoverContent>
    </Popover>
  );
}
