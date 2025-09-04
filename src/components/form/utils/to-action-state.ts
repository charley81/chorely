import z, { ZodError } from 'zod'

export type ActionState =
  | {
      message: string
      payload?: FormData
      fieldErrors: Record<string, string[] | undefined>
    }
  | undefined

export function fromErrorToActionState(
  error: unknown,
  formData: FormData,
): ActionState {
  if (error instanceof ZodError) {
    return {
      message: error.issues[0].message,
      payload: formData,
      fieldErrors: z.flattenError(error).fieldErrors,
    }
  } else if (error instanceof Error) {
    return {
      message: error.message,
      payload: formData,
      fieldErrors: {},
    }
  } else {
    return {
      message: 'unknown error occured...',
      payload: formData,
      fieldErrors: {},
    }
  }
}
