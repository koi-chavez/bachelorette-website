import { event } from '@/lib/data'
import { Countdown } from './countdown'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden">
      <img
        src="/hero-coast.png"
        alt="Aerial view of the turquoise gulf water and white sand of Santa Rosa Beach, Florida"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Soft wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/45" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-5 pt-24 text-center text-background">
        <p className="mb-5 text-xs font-light uppercase tracking-[0.35em] text-background/90 sm:text-sm">
          You&apos;re Invited To
        </p>
        <h1 className="text-balance font-serif text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          Julia&apos;s
          <span className="mt-1 block italic">Bachelorette Weekend</span>
        </h1>

        <div className="mt-7 flex flex-col items-center gap-1 text-base font-light tracking-wide sm:text-lg">
          <p className="uppercase tracking-[0.2em]">{event.dateRange}</p>
          <p className="text-background/85">{event.location}</p>
        </div>

        <div className="mt-10 w-full">
          <Countdown target={event.countdownTarget} />
        </div>

        <a
          href="#itinerary"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-8 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-transform duration-200 hover:scale-[1.03]"
        >
          View Weekend Details
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[0.625rem] uppercase tracking-[0.3em] text-background/70">
        Scroll to explore
      </div>
    </section>
  )
}
