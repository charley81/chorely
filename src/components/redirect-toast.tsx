'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { deleteCookieByKey, getCookieByKey } from '@/actions/cookies'

export function RedirectToast() {
  const pathname = usePathname()

  useEffect(() => {
    const showToastMessage = async () => {
      const message = await getCookieByKey('toast')

      if (message) {
        toast.success(message, { id: message })
        deleteCookieByKey('toast')
      }
    }

    showToastMessage()
  }, [pathname])

  return null
}
