import { ZodError } from 'zod';

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (error: unknown, formData: FormData) => {
  if (error instanceof ZodError) {
    console.log(transformZodIssuesToFieldErrors(error.issues));
    return {
      message: '',
      fieldErrors: transformZodIssuesToFieldErrors(error.issues),
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
  } else {
    return {
      message: 'An unkown error occurred',
      fieldErrors: {},
      payload: formData,
    };
  }
};

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
