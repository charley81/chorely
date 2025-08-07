import { choresPath } from '@/paths'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Chorely</h1>
      <Link href={choresPath()}>Go to chores</Link>
    </div>
  )
}
