import { ArrowUpRight } from 'lucide-react'
import { dressThemes } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function DressThemes() {
  return (
    <section id="themes" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Dress to Impress"
          title="Dress Themes"
          description="Three looks for three unforgettable moments. Use the mood boards and color palettes below to plan your outfits."
        />

        <div className="mt-16 space-y-16 md:space-y-24">
          {dressThemes.map((theme, index) => (
            <div
              key={theme.name}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="overflow-hidden rounded-3xl shadow-md">
                  <img
                    src={theme.image || '/placeholder.svg'}
                    alt={`Mood board for the ${theme.name} dress theme`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-xs font-light uppercase tracking-[0.3em] text-primary">
                  {`Look 0${index + 1} · ${theme.occasion}`}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-light text-foreground sm:text-4xl">
                  {theme.name}
                </h3>
                <p className="mt-4 max-w-md text-pretty font-light leading-relaxed text-muted-foreground">
                  {theme.description}
                </p>

                <div className="mt-7">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Color Palette
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {theme.palette.map((color) => (
                      <div key={color.name} className="flex flex-col items-center gap-2">
                        <span
                          className="h-14 w-14 rounded-full border border-border shadow-sm"
                          style={{ backgroundColor: color.hex }}
                          aria-hidden="true"
                        />
                        <span className="text-[0.7rem] font-light text-muted-foreground">
                          {color.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {theme.inspoLink ? (
                  <a
                    href={theme.inspoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-light uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    {theme.inspoLabel ?? 'View inspiration'}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
