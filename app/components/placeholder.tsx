import { LucideCircleAlert } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<React.ComponentPropsWithoutRef<'svg'>>;
  button?: React.ReactNode;
};

export function Placeholder({
  label,
  icon = <LucideCircleAlert />,
  button = <div className="h-10" />,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 self-center flex-col items-center justify-center mt-40">
      {cloneElement(icon, {
        className: 'w-8 h-8',
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
}
