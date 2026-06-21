import { contact, event } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="bg-primary px-5 py-16 text-center text-primary-foreground md:py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-light uppercase tracking-[0.35em] text-primary-foreground/80">
          See You at the Beach
        </p>
        <p className="mt-5 font-serif text-4xl font-light italic leading-tight sm:text-5xl">
          Cheers to Julia
        </p>
        <p className="mt-5 text-sm font-light tracking-wide text-primary-foreground/85">
          {event.dateRange} · {event.location}
        </p>

        <div className="mx-auto mt-10 max-w-sm border-t border-primary-foreground/20 pt-8">
          <p className="text-xs font-light uppercase tracking-[0.25em] text-primary-foreground/70">
            Questions?
          </p>
          <p className="mt-3 text-sm font-light text-primary-foreground/90">
            Reach out to {contact.name}, your {contact.role}
          </p>
          <a
            href={contact.phoneHref}
            className="mt-2 inline-block font-serif text-2xl font-light italic text-primary-foreground transition-opacity hover:opacity-80"
          >
            {contact.phone}
          </a>
        </div>

        <p className="mt-10 text-xs font-light text-primary-foreground/60">
          Made with love for Julia&apos;s Bachelorette Weekend
        </p>
      </div>
    </footer>
  )
}
