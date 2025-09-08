'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { deleteCookieByKey, getCookieByKey } from '@/actions/cookies'

export function RedirectToast() {
  console.log('redirect toast component is rendering')
  const pathname = usePathname()

  useEffect(() => {
    const showToastMessage = async () => {
      console.log('checking for cookie on path', pathname)
      const message = await getCookieByKey('toast')
      console.log('message from cookie', message)

      if (message) {
        toast.success(message)
        deleteCookieByKey('toast')
      }
    }

    showToastMessage()
  }, [pathname])

  return null
}
