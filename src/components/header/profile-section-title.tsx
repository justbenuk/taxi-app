type ProfileSectionProps = {
  title: string
  description?: string
}

export default function ProfileSectionTitle({ title, description }: ProfileSectionProps) {
  return (
    <div>
      <h1 className="text-yellow-500 dark:text-yellow-300 font-semibold text-2xl">{title}</h1>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  )
}

