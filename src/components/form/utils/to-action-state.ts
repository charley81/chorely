import z, { ZodError } from 'zod'

export type ActionState =
  | {
      status?: 'SUCCESS' | 'ERROR'
      message: string
      payload?: FormData
      fieldErrors: Record<string, string[] | undefined>
      timestamp: number
    }
  | undefined

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
}

export function fromErrorToActionState(
  error: unknown,
  formData: FormData,
): ActionState {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR',
      message: error.issues[0].message,
      payload: formData,
      fieldErrors: z.flattenError(error).fieldErrors,
      timestamp: Date.now(),
    }
  } else if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    }
  } else {
    return {
      status: 'ERROR',
      message: 'unknown error occured...',
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now(),
    }
  }
}

export function toActionState(
  status: 'SUCCESS' | 'ERROR',
  message: string,
): ActionState {
  return { status, message, fieldErrors: {}, timestamp: Date.now() }
}
