'use client'

import { useEffect, useState } from 'react'

import { Heading } from '@/components/heading'
import ChoreList from '@/features/chores/components/chore-list'
import { getChores } from '@/features/chores/queries/get-chores'
import { Chore } from '@/features/chores/types'

export default function ChoresPage() {
  const [chores, setChores] = useState<Chore[]>([])

  useEffect(() => {
    const fetchChores = async () => {
      const result = await getChores()
      setChores(result)
    }

    fetchChores()
  }, [])
  return (
    <>
      <Heading title="Chores" description="All your chores here" />
      <div className="animate-fade-in-from-top flex w-full flex-col items-center gap-y-4">
        <ChoreList chores={chores} />
      </div>
    </>
  )
}
