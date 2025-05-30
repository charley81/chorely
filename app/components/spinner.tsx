import { Loader } from 'lucide-react';

export function Spinner() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center self-center">
      <Loader className="h-16 w-16 animate-spin" />
    </div>
  );
}
