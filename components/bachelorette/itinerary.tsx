import { itinerary } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function Itinerary() {
  return (
    <section id="itinerary" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Plan"
          title="Weekend Itinerary"
          description="Five days of sun, sand and celebration. Here's everything we have planned — flexible, breezy and all about Julia."
        />

        <div className="mt-16 space-y-12 md:space-y-16">
          {itinerary.map((day) => (
            <div
              key={day.day}
              className="grid gap-6 border-t border-border pt-8 md:grid-cols-[220px_1fr] md:gap-12"
            >
              <div className="md:sticky md:top-24 md:self-start">
                <p className="font-serif text-3xl font-light text-foreground md:text-4xl">
                  {day.day}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-primary">
                  {day.date}
                </p>
              </div>

              <ul className="space-y-4">
                {day.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center sm:gap-5"
                  >
                    <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-primary sm:w-24">
                      {item.time ?? 'All Day'}
                    </span>
                    <div>
                      <p className="font-serif text-xl text-foreground">{item.title}</p>
                      {item.note ? (
                        <p className="text-sm font-light text-muted-foreground">{item.note}</p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
