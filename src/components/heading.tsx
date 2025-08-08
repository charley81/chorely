type HeaderProps = {
  title: string
  description?: string
}

export function Heading({ title, description }: HeaderProps) {
  return (
    <div className="py-12">
      <h3 className="text-4xl font-bold">{title}</h3>
      {description && <p className="text-base text-slate-500">{description}</p>}
    </div>
  )
}
