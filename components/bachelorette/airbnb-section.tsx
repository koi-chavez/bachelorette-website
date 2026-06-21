import { MapPin, LogIn, LogOut, ArrowUpRight, Check, BedDouble } from 'lucide-react'
import { airbnb } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function AirbnbSection() {
  return (
    <section id="airbnb" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Where We're Staying"
          title="The Airbnb"
        />

        <div className="mt-16 grid items-stretch gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img
              src={airbnb.image || '/placeholder.svg'}
              alt={`Exterior of ${airbnb.name}, our beach house rental`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-7 md:p-10">
            <div>
              <h3 className="font-serif text-3xl font-light text-foreground">{airbnb.name}</h3>
              <p className="mt-3 text-pretty font-light leading-relaxed text-muted-foreground">
                {airbnb.blurb}
              </p>
            </div>

            <div className="flex items-start gap-3 text-sm text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="font-light">{airbnb.address}</span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-y border-border py-5">
              {airbnb.details.map((d) => (
                <div key={d.label}>
                  <p className="text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {d.label}
                  </p>
                  <p className="font-serif text-lg text-foreground">{d.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2 text-foreground">
                <LogIn className="h-4 w-4 text-primary" />
                <span className="font-light">{airbnb.checkIn}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <LogOut className="h-4 w-4 text-primary" />
                <span className="font-light">{airbnb.checkOut}</span>
              </div>
            </div>

            <a
              href={airbnb.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-primary-foreground transition-transform duration-200 hover:scale-[1.03]"
            >
              Join the Listing
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-8 rounded-3xl border border-border bg-card p-7 shadow-sm md:grid-cols-2 md:p-10">
          <div>
            <h4 className="font-serif text-2xl font-light text-foreground">Home Highlights</h4>
            <ul className="mt-5 flex flex-col gap-3">
              {airbnb.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm font-light text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:border-l md:border-border md:pl-10">
            <div className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-primary" />
              <h4 className="font-serif text-2xl font-light text-foreground">Sleeping</h4>
            </div>
            <p className="text-pretty text-sm font-light leading-relaxed text-muted-foreground">
              {airbnb.sleeping}
            </p>
            <p className="text-xs font-light leading-relaxed text-muted-foreground">
              Non-smoking, non-pet-friendly home. Guests 25 and under must be accompanied by a
              parent or guardian per the property&apos;s rental policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
