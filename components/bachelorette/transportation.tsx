import { Plane, Car, Navigation, ParkingSquare } from 'lucide-react'
import { transportation } from '@/lib/data'
import { SectionHeading } from './section-heading'

const icons = [Plane, Car, Navigation, ParkingSquare]

export function Transportation() {
  return (
    <section id="transportation" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Getting There"
          title="Transportation"
          description="Everything you need to know about flying in, getting to the house and moving around for the weekend."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {transportation.map((option, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={option.title}
                className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm md:p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent">
                  <Icon className="h-5 w-5 text-accent-foreground" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{option.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
