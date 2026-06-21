import { SiteNav } from '@/components/bachelorette/site-nav'
import { Hero } from '@/components/bachelorette/hero'
import { Itinerary } from '@/components/bachelorette/itinerary'
import { DressThemes } from '@/components/bachelorette/dress-themes'
import { AirbnbSection } from '@/components/bachelorette/airbnb-section'
import { Transportation } from '@/components/bachelorette/transportation'
import { PackingList } from '@/components/bachelorette/packing-list'
import { Faq } from '@/components/bachelorette/faq'
import { SiteFooter } from '@/components/bachelorette/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Itinerary />
      <DressThemes />
      <AirbnbSection />
      {/* <Transportation /> */}
      <PackingList />
      <Faq />
      <SiteFooter />
    </main>
  )
}
