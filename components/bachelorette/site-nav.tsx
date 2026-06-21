'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#top"
          className={cn(
            'font-serif text-lg tracking-wide transition-colors md:text-xl',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          Julia&apos;s Bachelorette
        </a>

        <ul
          className={cn(
            'hidden items-center gap-7 text-sm font-light tracking-wide lg:flex',
            scrolled ? 'text-foreground' : 'text-background',
          )}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-opacity after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden',
            scrolled ? 'text-foreground hover:bg-muted' : 'text-background hover:bg-background/10',
          )}
        >
          {open ? <Menu className="h-5 w-5 opacity-0" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-serif text-lg tracking-wide text-foreground">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col justify-center gap-2 px-8 pb-20">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-4 font-serif text-3xl text-foreground"
              >
                <span className="mr-3 align-middle font-sans text-xs text-primary">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
