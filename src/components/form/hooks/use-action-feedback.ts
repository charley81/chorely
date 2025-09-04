'use client'

import { useEffect, useRef } from 'react'

import { ActionState } from '../utils/to-action-state'

type OnArgs = { actionState: ActionState }

type UseActionFeedbackProps = {
  actionState: ActionState
  options: {
    onSuccess?: (onArgs: OnArgs) => void | undefined
    onError?: (onArgs: OnArgs) => void | undefined
  }
}

export function useActionFeedback({
  actionState,
  options,
}: UseActionFeedbackProps) {
  const { onSuccess, onError } = options

  const prevTimestamp = useRef(actionState?.timestamp)
  const isUpdated = prevTimestamp.current !== actionState?.timestamp

  useEffect(() => {
    if (!isUpdated) return

    if (actionState?.status === 'SUCCESS') {
      onSuccess?.({ actionState })
    }

    if (actionState?.status === 'ERROR') {
      onError?.({ actionState })
    }

    prevTimestamp.current = actionState?.timestamp
  }, [isUpdated, actionState, onSuccess, onError])
}
