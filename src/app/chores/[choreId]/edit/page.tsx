import { notFound } from 'next/navigation'

import { CardCompact } from '@/components/card-compact'
import { EditChoreForm } from '@/features/chores/components/forms/edit-chore-form'
import { getChore } from '@/features/chores/queries/get-chore'

type EditChorePageParams = {
  params: Promise<{ choreId: string }>
}

export default async function EditChorePage({ params }: EditChorePageParams) {
  const { choreId } = await params
  const chore = await getChore(choreId)

  if (!chore) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Edit chore"
        description="Edit this chore"
        content={<EditChoreForm chore={chore} />}
        className="animate-fade-in-from-top w-full max-w-[448px]"
      />
    </div>
  )
}
