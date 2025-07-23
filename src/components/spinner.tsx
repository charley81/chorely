import { LucideLoader } from 'lucide-react';

export function Spinner() {
  return (
    <div className="mt-20 flex flex-1 justify-center">
      <LucideLoader className="h-16 w-16 animate-spin" />
    </div>
  );
}
