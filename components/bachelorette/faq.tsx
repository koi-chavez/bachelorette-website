'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Good to Know" title="FAQ" />

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-serif text-lg text-foreground sm:text-xl">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-pretty font-light leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
