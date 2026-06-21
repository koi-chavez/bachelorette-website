'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState<ReturnType<typeof getRemaining> | null>(null)

  useEffect(() => {
    setTime(getRemaining(target))
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Days', value: time?.days },
    { label: 'Hours', value: time?.hours },
    { label: 'Minutes', value: time?.minutes },
    { label: 'Seconds', value: time?.seconds },
  ]

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-4">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[68px] flex-col items-center rounded-2xl border border-background/25 bg-background/10 px-3 py-3 backdrop-blur-sm sm:min-w-[88px] sm:px-5 sm:py-4"
        >
          <span className="font-serif text-3xl leading-none text-background sm:text-5xl">
            {unit.value === undefined ? '--' : String(unit.value).padStart(2, '0')}
          </span>
          <span className="mt-2 text-[0.625rem] font-light uppercase tracking-[0.2em] text-background/80 sm:text-xs">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
