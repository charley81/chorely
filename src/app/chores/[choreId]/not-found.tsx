import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { choresPath } from '@/paths'
import Link from 'next/link'

function notFound() {
  return (
    <div className="flex justify-between">
      <Placeholder
        label="Chore not found..."
        button={
          <Button asChild variant="outline" className="flex items-center">
            <Link href={choresPath()}>Go to chores</Link>
          </Button>
        }
      />
    </div>
  )
}

export default notFound
