import { ZodError } from 'zod';

export type ActionState = {
  status?: 'SUCCESS' | 'ERROR';
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToActionState = (error: unknown, formData: FormData) => {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: formatZodErrorMessage(error),
      fieldErrors: transformZodIssuesToFieldErrors(error.issues),
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR' as const,
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR' as const,
      message: 'hmm.. unkown error',
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState['status'],
  message: string,
): ActionState => {
  return { status, message, fieldErrors: {}, timestamp: Date.now() };
};

function formatZodErrorMessage(error: ZodError): string {
  return error.issues[0]?.message || 'Form validation failed';
}

function transformZodIssuesToFieldErrors(
  issues: ZodError['issues'],
): Record<string, string[]> {
  const fieldErrors: Record<string, string[]> = {};

  for (const issue of issues) {
    const path = issue.path.join('.');
    if (!fieldErrors[path]) {
      fieldErrors[path] = [];
    }
    fieldErrors[path].push(issue.message);
  }

  return fieldErrors;
}
