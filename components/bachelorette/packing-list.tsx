'use client'

import { useMemo, useState } from 'react'
import { Check, RotateCcw } from 'lucide-react'
import { packingList } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

export function PackingList() {
  const allItems = useMemo(
    () => packingList.flatMap((c) => c.items.map((item) => `${c.category}::${item}`)),
    [],
  )
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }))

  const completed = allItems.filter((k) => checked[k]).length
  const total = allItems.length
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <section id="packing" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Don't Forget"
          title="Packing List"
          description="Tap each item as you pack. Your progress is tracked right here."
        />

        <div className="mx-auto mt-12 max-w-md">
          <div className="flex items-center justify-between text-sm">
            <span className="font-light text-muted-foreground">
              {completed} of {total} packed
            </span>
            <button
              type="button"
              onClick={() => setChecked({})}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-primary transition-opacity hover:opacity-70"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {packingList.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-serif text-xl text-foreground">{category.category}</h3>
              <ul className="mt-4 space-y-1">
                {category.items.map((item) => {
                  const key = `${category.category}::${item}`
                  const isChecked = !!checked[key]
                  return (
                    <li key={key}>
                      <button
                        type="button"
                        onClick={() => toggle(key)}
                        aria-pressed={isChecked}
                        className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-muted/60"
                      >
                        <span
                          className={cn(
                            'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors',
                            isChecked
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border bg-background',
                          )}
                        >
                          {isChecked ? <Check className="h-3.5 w-3.5" /> : null}
                        </span>
                        <span
                          className={cn(
                            'text-sm font-light transition-colors',
                            isChecked
                              ? 'text-muted-foreground line-through'
                              : 'text-foreground',
                          )}
                        >
                          {item}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
