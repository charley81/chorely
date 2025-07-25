import { ActionState } from './utils/to-action-state';

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

export function FieldError({ actionState, name }: FieldErrorProps) {
  const message = actionState.fieldErrors?.[name]?.[0];

  if (!message) return null;

  return <span className="text-sm text-red-500">{message}</span>;
}
