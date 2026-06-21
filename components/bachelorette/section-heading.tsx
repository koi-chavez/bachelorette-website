import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  invert,
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  invert?: boolean
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      {eyebrow ? (
        <span
          className={cn(
            'mb-4 text-xs font-light uppercase tracking-[0.3em]',
            invert ? 'text-background/80' : 'text-primary',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-balance font-serif text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl',
          invert ? 'text-background' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-2xl text-pretty text-base font-light leading-relaxed sm:text-lg',
            invert ? 'text-background/85' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
