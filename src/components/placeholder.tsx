import { LucideCircleAlert } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  message: string;
  icon?: React.JSX.Element;
  button?: React.ReactNode;
};

export function Placeholder({
  message,
  icon = <LucideCircleAlert />,
  button = <div className="h-10" />,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
      {cloneElement(icon, {
        className: 'w-16 h-16 text-destructive',
      })}
      <h2 className="text-4xl font-bold">{message}</h2>
      {button}
    </div>
  );
}
