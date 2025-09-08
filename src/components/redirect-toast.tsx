'use client'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { deleteCookieByKey, getCookieByKey } from '@/actions/cookies'

export function RedirectToast() {
  useEffect(() => {
    const showToastMessage = async () => {
      const message = await getCookieByKey('toast')

      if (message) {
        toast.success(message)
        await deleteCookieByKey('toast')
      }
    }

    showToastMessage()
  }, [])

  return null
}
