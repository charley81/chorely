import { LucideTriangleAlert } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<SVGSVGElement>;
  button?: React.ReactElement;
};

export function Placeholer({
  label,
  icon = <LucideTriangleAlert />,
  button = <div className="h-10" />,
}: PlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <span>
        {cloneElement(icon, {
          className: 'w-16 h-16',
        })}
      </span>
      <p className="mb-4">{label}</p>
      {button}
    </div>
  );
}
