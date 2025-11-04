export type Event = {
  slug: string
  title: string
  subtitle?: string
  image: string
  date: string
  shortDate: string
  time: string
  duration: string
  price: number
  location: string
  language: string
  capacity: string
  description: string
  highlights: string[]
  host: {
    name: string
    title: string
  }
}

const events: Event[] = [
  {
    slug: 'gyeongbokgung-palace-tour',
    title: 'Gyeongbokgung Palace Tour',
    subtitle: 'Seoul · English/Korean',
    image: 'https://images.unsplash.com/photo-1514388619276-6ae38d1f7a4e?q=80&w=1600&auto=format&fit=crop',
    date: 'April 22, 2024',
    shortDate: 'Apr 22',
    time: '2:00 PM – 4:00 PM',
    duration: '2 hours',
    price: 25000,
    location: 'Gyeongbokgung Palace, Jongno-gu, Seoul',
    language: 'English & Korean',
    capacity: 'Up to 12 guests',
    description:
      'Explore the grandest of Seoul\'s five palaces with a licensed cultural heritage guide. Wander through the royal halls, tranquil courtyards, and discover the stories that shaped the Joseon Dynasty.',
    highlights: [
      'Skip-the-line access with admission ticket included',
      'Wireless audio system so you never miss a story',
      'Photo tips at the iconic Gwanghwamun Gate and Geunjeongjeon Hall',
    ],
    host: {
      name: 'Minji Park',
      title: 'Licensed Cultural Heritage Guide',
    },
  },
  {
    slug: 'seoul-skyline-night-cruise',
    title: 'Seoul Skyline Night Cruise',
    image: 'https://images.unsplash.com/photo-1583397593091-5f83e3874c2f?q=80&w=1200&auto=format&fit=crop',
    date: 'April 24, 2024',
    shortDate: 'Apr 24',
    time: '8:00 PM – 9:30 PM',
    duration: '1.5 hours',
    price: 32000,
    location: 'Yeouido Hangang Park Marina, Seoul',
    language: 'English',
    capacity: 'Up to 40 guests',
    description:
      'Sail along the Han River at sunset and watch Seoul\'s skyline shimmer to life. Enjoy live music onboard and learn about the landmarks that line the river banks.',
    highlights: [
      'Complimentary welcome drink and snacks',
      'Live jazz performance on deck',
      'Panoramic views of bridges and city lights',
    ],
    host: {
      name: 'Skyline Cruises Seoul',
      title: 'River Cruise Specialists',
    },
  },
  {
    slug: 'kimchi-making-class',
    title: 'Kimchi Making Class',
    image: 'https://images.unsplash.com/photo-1604908554055-0c3b7b4bd86d?q=80&w=1200&auto=format&fit=crop',
    date: 'April 26, 2024',
    shortDate: 'Apr 26',
    time: '11:00 AM – 1:00 PM',
    duration: '2 hours',
    price: 18000,
    location: 'Mapo Cooking Studio, Seoul',
    language: 'English & Korean',
    capacity: 'Up to 10 guests',
    description:
      'Roll up your sleeves and learn Korea\'s beloved fermentation tradition. From seasoning to fermentation tips, take home your own jar of freshly made kimchi.',
    highlights: [
      'Hands-on instruction with local chef',
      'All ingredients and jars provided',
      'Enjoy homemade side dishes and tea',
    ],
    host: {
      name: 'Chef Hyejin',
      title: 'Fermentation Enthusiast & Cooking Instructor',
    },
  },
  {
    slug: 'hiking-in-bukhansan',
    title: 'Hiking in Bukhansan',
    image: 'https://images.unsplash.com/photo-1595147389795-37094173bfd2?q=80&w=1200&auto=format&fit=crop',
    date: 'April 27, 2024',
    shortDate: 'Apr 27',
    time: '8:30 AM – 1:30 PM',
    duration: '5 hours',
    price: 28000,
    location: 'Bukhansan National Park Entrance, Seoul',
    language: 'English',
    capacity: 'Up to 8 guests',
    description:
      'Tackle one of Seoul\'s most beloved hiking routes with a seasoned mountain guide. Experience sweeping city views, granite peaks, and temple stops along the way.',
    highlights: [
      'Small group pace with frequent photo breaks',
      'Traditional temple visit included',
      'Snacks and bottled water provided',
    ],
    host: {
      name: 'Junho Lee',
      title: 'Certified Mountain Guide',
    },
  },
  {
    slug: 'han-river-picnic',
    title: 'Han River Picnic',
    image: 'https://images.unsplash.com/photo-1608354584374-2f7d8a6aa8f5?q=80&w=1200&auto=format&fit=crop',
    date: 'April 30, 2024',
    shortDate: 'Apr 30',
    time: '5:00 PM – 7:00 PM',
    duration: '2 hours',
    price: 15000,
    location: 'Banpo Hangang Park, Seoul',
    language: 'English & Korean',
    capacity: 'Up to 16 guests',
    description:
      'Unwind with a curated picnic set on the grassy banks of the Han River. Watch the Banpo Bridge rainbow fountain and mingle with new friends over seasonal bites.',
    highlights: [
      'Handmade picnic spread with local delicacies',
      'Cozy blankets and games provided',
      'Optional bike rental add-on',
    ],
    host: {
      name: 'Local Korea Hosts',
      title: 'Community Experience Curators',
    },
  },
  {
    slug: 'traditional-tea-ceremony',
    title: 'Traditional Tea Ceremony',
    image: 'https://images.unsplash.com/photo-1523908957990-36f52d52c3b8?q=80&w=800&auto=format&fit=crop',
    date: 'April 25, 2024',
    shortDate: 'Apr 25',
    time: '3:00 PM – 4:30 PM',
    duration: '1.5 hours',
    price: 15000,
    location: 'Bukchon Hanok Village, Seoul',
    language: 'English & Korean',
    capacity: 'Up to 6 guests',
    description:
      'Step into a restored hanok and participate in a mindful Korean tea ceremony. Learn proper etiquette, the symbolism behind each movement, and taste rare artisan teas.',
    highlights: [
      'Guidance from a tea master with 20 years experience',
      'Traditional sweets pairing and tea tasting',
      'Take-home booklet on ceremony etiquette',
    ],
    host: {
      name: 'Seoyeon Kim',
      title: 'Tea Master & Cultural Storyteller',
    },
  },
  {
    slug: 'busan-food-tasting',
    title: 'Busan Food Tasting',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    date: 'April 27, 2024',
    shortDate: 'Apr 27',
    time: '12:30 PM – 3:30 PM',
    duration: '3 hours',
    price: 30000,
    location: 'Jagalchi Market, Busan',
    language: 'English',
    capacity: 'Up to 10 guests',
    description:
      'Dive into Busan\'s vibrant food scene with a local culinary expert. Taste market favorites, learn bargaining phrases, and enjoy a harbor-view seafood feast.',
    highlights: [
      'Guided tastings at five iconic stalls',
      'Seasonal seafood lunch with makgeolli pairing',
      'Mini language workshop for market shopping',
    ],
    host: {
      name: 'Chef Doyun',
      title: 'Busan Native & Food Writer',
    },
  },
  {
    slug: 'han-river-bike-ride',
    title: 'Han River Bike Ride',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
    date: 'April 29, 2024',
    shortDate: 'Apr 29',
    time: '9:00 AM – 11:30 AM',
    duration: '2.5 hours',
    price: 10000,
    location: 'Ttukseom Hangang Park, Seoul',
    language: 'English & Korean',
    capacity: 'Up to 12 guests',
    description:
      'Cruise along dedicated riverside bike paths with an experienced local cyclist. Discover public art installations, hidden cafes, and scenic rest stops.',
    highlights: [
      'Premium bike and helmet rental included',
      'Safety briefing and riding tips for all levels',
      'Coffee stop at a riverside café',
    ],
    host: {
      name: 'Soojin Choi',
      title: 'Urban Cycling Guide',
    },
  },
]

const eventsBySlug = new Map(events.map((event) => [event.slug, event]))

const featuredEventSlug = 'gyeongbokgung-palace-tour'
const trendingEventSlugs = [
  'seoul-skyline-night-cruise',
  'kimchi-making-class',
  'hiking-in-bukhansan',
  'han-river-picnic',
]
const upcomingEventSlugs = [
  'traditional-tea-ceremony',
  'busan-food-tasting',
  'han-river-bike-ride',
]

export function getEventBySlug(slug: string) {
  return eventsBySlug.get(slug) ?? null
}

export function getFeaturedEvent() {
  const event = getEventBySlug(featuredEventSlug)
  if (!event) {
    throw new Error('Featured event not found')
  }
  return event
}

function getEventsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getEventBySlug(slug))
    .filter((event): event is Event => event !== null)
}

export function getTrendingEvents() {
  return getEventsBySlugs(trendingEventSlugs)
}

export function getUpcomingEvents() {
  return getEventsBySlugs(upcomingEventSlugs)
}

export function getAllEvents() {
  return events.slice()
}
