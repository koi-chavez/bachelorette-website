// ----------------------------------------------------------------------------
// Editable mock data for Julia's Bachelorette Weekend
// Update the values below to customize the site.
// ----------------------------------------------------------------------------

export const event = {
  honoree: 'Julia',
  title: "Julia's Bachelorette Weekend",
  startDate: 'July 30, 2026',
  endDate: 'August 3, 2026',
  dateRange: 'July 30 – August 3, 2026',
  location: 'Santa Rosa Beach, Florida',
  // Used by the countdown timer (local time)
  countdownTarget: '2026-07-30T00:00:00',
}

export const contact = {
  name: 'Koi',
  role: 'Maid of Honor',
  phone: '801-875-2160',
  // tel: link uses digits only
  phoneHref: 'tel:+18018752160',
}

export const navLinks = [
  { label: 'Itinerary', href: '#itinerary' },
  { label: 'Dress Themes', href: '#themes' },
  { label: 'Airbnb', href: '#airbnb' },
  { label: 'Transportation', href: '#transportation' },
  { label: 'Packing List', href: '#packing' },
  { label: 'FAQ', href: '#faq' },
]

export type ItineraryItem = {
  time?: string
  title: string
  note?: string
}

export type ItineraryDay = {
  day: string
  date: string
  items: ItineraryItem[]
}

export const itinerary: ItineraryDay[] = [
  {
    day: 'Thursday',
    date: 'July 30',
    items: [
      { title: 'Arrivals', note: 'Settle in & get cozy' },
      { title: 'Pool Time', note: 'Float, sip & soak up the sun' },
      { title: 'Dinner at the House', note: 'A relaxed welcome meal' },
      { title: 'Icebreaker Games', note: 'Get to know the crew' },
    ],
  },
  {
    day: 'Friday',
    date: 'July 31',
    items: [
      { time: '9:00 AM – 3:00 PM', title: 'Crab Island Pontoon Charter', note: 'A full day on the water' },
      { title: 'Relax & Get Ready', note: 'Rest, refresh & glam up' },
      { title: 'RIP to Her Last Name Dinner', note: 'A funeral for the single life' },
    ],
  },
  {
    day: 'Saturday',
    date: 'August 1',
    items: [
      { title: 'Beach Day', note: 'Toes in the sand' },
      { title: 'Main Night Out', note: 'The big celebration' },
      { title: 'Spritz & Sequins Theme', note: 'Sparkle all night' },
    ],
  },
  {
    day: 'Sunday',
    date: 'August 2',
    items: [
      { title: 'Brunch', note: 'Mimosas & good food' },
      { title: 'Pool / Shopping / Free Time', note: 'Your choice of bliss' },
      { title: 'Sunset Bonfire', note: 'S’mores on the beach' },
    ],
  },
  {
    day: 'Monday',
    date: 'August 3',
    items: [{ title: 'Travel Home', note: 'Safe travels, loves' }],
  },
]

export type DressTheme = {
  name: string
  occasion: string
  description: string
  image: string
  palette: { name: string; hex: string }[]
  // Optional inspiration link (TikTok, Pinterest board, etc.)
  inspoLink?: string
  inspoLabel?: string
}

export const dressThemes: DressTheme[] = [
  {
    name: 'Tequila Sunrise',
    occasion: 'Crab Island Boat Charter',
    description:
      'Swimsuit and boat-ready brights for our day on the water. Think bikinis, sarongs and cover-ups in oranges, corals, pinks and reds — sunny, flirty and made for Crab Island.',
    image: '/theme-tequila-sunrise.png',
    palette: [
      { name: 'Sunrise Orange', hex: '#F2994A' },
      { name: 'Coral', hex: '#F2786B' },
      { name: 'Hot Pink', hex: '#E85C8A' },
      { name: 'Poppy Red', hex: '#D94343' },
    ],
  },
  {
    name: 'RIP to Her Last Name',
    occasion: 'Friday Dinner',
    description:
      'A funeral for the single life. Guests wear all black to mourn — the bride wears white to celebrate her new chapter.',
    image: '/theme-rip.png',
    palette: [
      { name: 'Onyx', hex: '#1C1C1E' },
      { name: 'Charcoal', hex: '#3A3A3C' },
      { name: 'Pearl', hex: '#F3F0E9' },
      { name: 'Ivory', hex: '#FBFAF6' },
    ],
    inspoLink: 'https://www.tiktok.com/t/ZP8svj3Pv/',
    inspoLabel: 'Watch outfit inspo',
  },
  {
    name: 'Spritz & Sequins',
    occasion: 'Saturday Night Out',
    description:
      'Sparkles, sequins and metallics. Elevated girls-night-out energy for the main celebration.',
    image: '/theme-spritz.png',
    palette: [
      { name: 'Champagne', hex: '#E7D8B1' },
      { name: 'Gold', hex: '#C9A24B' },
      { name: 'Silver', hex: '#C9CDD2' },
      { name: 'Aperol', hex: '#E8662A' },
    ],
    inspoLink: 'https://www.tiktok.com/t/ZP8svJG7T/',
    inspoLabel: 'Watch outfit inspo',
  },
]

export const airbnb = {
  name: '64 on the Shore',
  blurb:
    'Our home base for the weekend — a classic Blue Mountain Beach retreat on 30A, newly furnished and full of coastal charm. Set right next to the community pool and less than half a mile from the Gulf, with a 6-seat low-speed vehicle and 4 bikes for effortless exploring. Walk to The Perfect Pig and Shunk Gully, then come home to a bright, airy great room.',
  image: '/airbnb-house.png',
  address: '64 Emma Huggins Lane, Santa Rosa Beach, FL 32459',
  checkIn: 'Thursday, July 30 · 4:00 PM',
  checkOut: 'Monday, August 3 · 10:00 AM',
  link: 'https://www.airbnb.com/l/rOXG3qCA?s=67&unique_share_id=fe9dcfb5-20f6-4b4f-8dc4-b1ee069e282a',
  details: [
    { label: 'Sleeps', value: '12 guests' },
    { label: 'Bedrooms', value: '4' },
    { label: 'Bathrooms', value: '4.5' },
    { label: 'To beach access', value: '9 min walk' },
  ],
  highlights: [
    'Next door to the community pool',
    'New 6-seat low-speed vehicle (LSV) with Bluetooth',
    '4 adult bikes for cruising 30A',
    'Walk to The Perfect Pig & Shunk Gully',
    'Blackstone & propane grills',
    'Beach chairs & wagon provided',
  ],
  sleeping:
    'Sleeps 12 across 4 bedrooms — two king primaries, a queen guest room, and a bunk room (queen + twin-over-twin), plus a queen sleeper sofa in the living area.',
}

export type TransportOption = {
  title: string
  description: string
}

export const transportation: TransportOption[] = [
  {
    title: 'Flying In',
    description:
      'The closest airport is Destin–Fort Walton Beach (VPS), about 45 minutes away. Northwest Florida Beaches (ECP) near Panama City is another option, roughly 50 minutes out.',
  },
  {
    title: 'From the Airport',
    description:
      'Coordinate arrival times in the group chat so we can carpool. Uber and Lyft are available, and a rental car is recommended for at least part of the group.',
  },
  {
    title: 'Getting Around',
    description:
      'We will have a couple of cars at the house for grocery runs and outings. The Crab Island charter includes pickup, so no driving needed on Friday.',
  },
  {
    title: 'Parking',
    description:
      'The Airbnb has driveway parking for up to 3 vehicles. Please carpool where possible to keep it easy.',
  },
]

export type PackingCategory = {
  category: string
  items: string[]
}

export const packingList: PackingCategory[] = [
  {
    category: 'Essentials',
    items: ['Photo ID & cash/cards', 'Phone charger', 'Sunglasses', 'Reusable water bottle', 'Medications'],
  },
  {
    category: 'Beach & Pool',
    items: ['2–3 swimsuits', 'Cover-up', 'Sunscreen (reef-safe)', 'Beach towel', 'Sun hat', 'Flip flops'],
  },
  {
    category: 'Outfits',
    items: [
      'Tequila Sunrise look (tropical brights)',
      'RIP dinner look (black; white for bride)',
      'Spritz & Sequins look (sparkle)',
      'Brunch outfit',
      'Comfy travel clothes',
    ],
  },
  {
    category: 'Extras',
    items: ['Portable charger', 'Glam: makeup & hair tools', 'Light jacket for evenings', 'Camera', 'A good attitude!'],
  },
]

export type FaqItem = {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: 'What should I budget for the weekend?',
    answer:
      'We will split lodging and the Crab Island charter evenly across the group. Plan for your own flights, a share of groceries, and meals out. A detailed breakdown will be shared in the group chat.',
  },
  {
    question: 'When should I arrive and leave?',
    answer:
      'Plan to arrive Thursday, July 30 in the afternoon and depart Monday, August 3 in the morning. Earlier or later flights are fine — just let us know so we can plan rides.',
  },
  {
    question: 'How do payments work?',
    answer:
      'The host will collect everyone’s share via Venmo or Zelle ahead of the trip. Please pay promptly so we can lock in reservations.',
  },
  {
    question: 'What’s the weather like?',
    answer:
      'Late July and early August in Santa Rosa Beach is hot and sunny, typically in the high 80s to low 90s. Expect humidity and the occasional afternoon shower — pack accordingly.',
  },
  {
    question: 'Can I bring a plus-one?',
    answer:
      'This is a girls-only celebration for Julia’s closest friends and family. Please keep it to the invited guest list so we have room for everyone.',
  },
  {
    question: 'Who do I contact with questions?',
    answer:
      'Koi is the maid of honor — reach out directly with any questions or concerns at 801-875-2160, or message the group chat anytime. No question is too small!',
  },
]
