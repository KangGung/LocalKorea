export type EventDetail = {
  slug: string
  title: string
  subtitle: string
  image: string
  location: string
  shortDate: string
  fullDate: string
  timeRange: string
  price: number
  currency: string
  summary: string
  description: string
  highlights: string[]
  includes: string[]
  meetingPoint: string
  languages: string[]
}

const events: EventDetail[] = [
  {
    slug: 'gyeongbokgung-palace-tour',
    title: 'Gyeongbokgung Palace Tour',
    subtitle: 'Seoul · English/Korean',
    image: 'https://images.unsplash.com/photo-1514388619276-6ae38d1f7a4e?q=80&w=1600&auto=format&fit=crop',
    location: 'Gyeongbokgung Palace, Jongno-gu, Seoul',
    shortDate: 'Apr 22',
    fullDate: 'April 22, 2024',
    timeRange: '2:00 PM – 4:00 PM',
    price: 25000,
    currency: '₩',
    summary:
      'Join us for a guided tour of Gyeongbokgung, the grandest of Seoul\'s five palaces. Discover the royal history and architecture of the Joseon Dynasty.',
    description:
      'Explore the courtyards, throne halls, and secret gardens of Gyeongbokgung Palace with an expert bilingual guide. We\'ll uncover stories of the royal family, admire the vibrant dancheong patterns, and learn about traditional court rituals during the Changing of the Guard ceremony.',
    highlights: [
      'Guided walk through the main palace complex',
      'Insights into Joseon dynasty history and culture',
      'Photo opportunities at Gwanghwamun Gate and Gyeonghoeru Pavilion',
    ],
    includes: ['Professional bilingual guide', 'Palace admission ticket', 'Audio receiver for clear commentary'],
    meetingPoint: 'Gwanghwamun Gate, exit 5',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'seoul-skyline-night-cruise',
    title: 'Seoul Skyline Night Cruise',
    subtitle: 'Hangang River · English/Korean',
    image: 'https://images.unsplash.com/photo-1583397593091-5f83e3874c2f?q=80&w=1200&auto=format&fit=crop',
    location: 'Yeouido Hangang Park Pier, Seoul',
    shortDate: 'Apr 23',
    fullDate: 'April 23, 2024',
    timeRange: '7:30 PM – 9:00 PM',
    price: 32000,
    currency: '₩',
    summary:
      'Cruise along the Han River at sunset and watch the city skyline light up with live music on board.',
    description:
      'Experience the magic of Seoul after dark. We\'ll sail past the Banpo Rainbow Fountain, glide under illuminated bridges, and enjoy live acoustic performances while sampling local refreshments.',
    highlights: [
      '1.5-hour river cruise with live music',
      'Panoramic views of the Seoul skyline at night',
      'Complimentary seasonal beverages on board',
    ],
    includes: ['Cruise ticket', 'Live performance', 'One complimentary drink'],
    meetingPoint: 'Yeouinaru Station exit 3, riverside ticket booth',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'kimchi-making-class',
    title: 'Kimchi Making Class',
    subtitle: 'Hongdae · English',
    image: 'https://images.unsplash.com/photo-1604908554055-0c3b7b4bd86d?q=80&w=1200&auto=format&fit=crop',
    location: 'Culture Lab Studio, Mapo-gu, Seoul',
    shortDate: 'Apr 24',
    fullDate: 'April 24, 2024',
    timeRange: '11:00 AM – 1:00 PM',
    price: 18000,
    currency: '₩',
    summary:
      'Learn traditional kimchi recipes from a local chef and take home your own handmade batch.',
    description:
      'This hands-on workshop covers the history of kimchi, ingredient selection, and fermentation techniques. You\'ll prepare two varieties of kimchi and enjoy a tasting session with homemade side dishes.',
    highlights: [
      'Hands-on instruction from a culinary expert',
      'Make two styles of kimchi to take home',
      'Tasting of seasonal banchan and rice',
    ],
    includes: ['All ingredients and equipment', 'Recipe booklet', 'Packaging for takeaway'],
    meetingPoint: 'Culture Lab Studio, 3F reception desk',
    languages: ['English'],
  },
  {
    slug: 'bukhansan-sunrise-hike',
    title: 'Hiking in Bukhansan',
    subtitle: 'Bukhansan National Park · English/Korean',
    image: 'https://images.unsplash.com/photo-1595147389795-37094173bfd2?q=80&w=1200&auto=format&fit=crop',
    location: 'Dobong-gu trailhead, Seoul',
    shortDate: 'Apr 26',
    fullDate: 'April 26, 2024',
    timeRange: '5:30 AM – 10:30 AM',
    price: 28000,
    currency: '₩',
    summary:
      'Catch the sunrise over Seoul from the peaks of Bukhansan with an experienced mountain guide.',
    description:
      'We\'ll start before dawn to ascend the Baegundae peak, pausing for scenic photo stops and a traditional hiking breakfast. Suitable for intermediate hikers with good fitness.',
    highlights: [
      'Sunrise views from Baegundae summit',
      'Guided hike with safety briefing',
      'Warm tea and kimbap picnic on the mountain',
    ],
    includes: ['Certified mountain guide', 'Breakfast snack pack', 'Safety gear'],
    meetingPoint: 'Gireum Station exit 3, shuttle bus stop',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'han-river-picnic',
    title: 'Han River Picnic',
    subtitle: 'Ttukseom Hangang Park · English/Korean',
    image: 'https://images.unsplash.com/photo-1608354584374-2f7d8a6aa8f5?q=80&w=1200&auto=format&fit=crop',
    location: 'Ttukseom Hangang Park, Seoul',
    shortDate: 'Apr 27',
    fullDate: 'April 27, 2024',
    timeRange: '3:00 PM – 6:00 PM',
    price: 15000,
    currency: '₩',
    summary:
      'Relax riverside with curated picnic sets, lawn games, and sunset views over the Han River.',
    description:
      'We\'ll reserve a cozy riverside spot with blankets, snacks, and games. Expect a friendly community atmosphere, music, and optional bike rentals to explore the park.',
    highlights: [
      'Curated picnic basket with local treats',
      'Casual games and acoustic music',
      'Optional bike rental add-on',
    ],
    includes: ['Picnic blanket and cushions', 'Snack assortment', 'Bottled water and iced tea'],
    meetingPoint: 'Ttukseom Station exit 3, park entrance',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'traditional-tea-ceremony',
    title: 'Traditional Tea Ceremony',
    subtitle: 'Bukchon Hanok Village · English/Korean',
    image: 'https://images.unsplash.com/photo-1523908957990-36f52d52c3b8?q=80&w=800&auto=format&fit=crop',
    location: 'Moonhyang Hanok Tea House, Jongno-gu, Seoul',
    shortDate: 'Apr 25',
    fullDate: 'April 25, 2024',
    timeRange: '1:00 PM – 2:30 PM',
    price: 15000,
    currency: '₩',
    summary:
      'Experience a serene Korean tea ceremony inside a restored hanok with a tea master.',
    description:
      'Learn about the etiquette and history of darye, the traditional Korean tea ceremony. You\'ll taste seasonal teas, practice mindful pouring techniques, and enjoy Korean sweets.',
    highlights: [
      'Guided tea ceremony by a certified tea master',
      'Sampling of three seasonal teas',
      'Handmade traditional desserts',
    ],
    includes: ['Tea tasting', 'Traditional sweets', 'Ceremony materials'],
    meetingPoint: 'Anguk Station exit 2, 5-minute walk to Moonhyang Tea House',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'busan-food-tasting',
    title: 'Busan Food Tasting',
    subtitle: 'Busan · English/Korean',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    location: 'Gukje Market, Jung-gu, Busan',
    shortDate: 'Apr 27',
    fullDate: 'April 27, 2024',
    timeRange: '12:00 PM – 3:00 PM',
    price: 30000,
    currency: '₩',
    summary:
      'Sample iconic Busan street foods on a guided tour through the city\'s bustling markets.',
    description:
      'Discover Busan\'s culinary scene with tastings of eomuk, ssiat hotteok, and milmyeon. Meet local vendors, hear their stories, and explore the vibrant Jagalchi seafood market.',
    highlights: [
      'Guided tastings at five beloved stalls',
      'Insights into Busan\'s food culture',
      'Small-group experience (max 8 guests)',
    ],
    includes: ['All tastings', 'Local guide', 'Metro day pass'],
    meetingPoint: 'Jagalchi Station exit 7, outside the market entrance',
    languages: ['English', 'Korean'],
  },
  {
    slug: 'han-river-bike-ride',
    title: 'Han River Bike Ride',
    subtitle: 'Yeouido · English/Korean',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
    location: 'Yeouido Hangang Park, Seoul',
    shortDate: 'Apr 29',
    fullDate: 'April 29, 2024',
    timeRange: '10:00 AM – 12:30 PM',
    price: 10000,
    currency: '₩',
    summary:
      'Cycle along the Han River with a local guide, stopping for coffee and skyline views.',
    description:
      'We\'ll follow a relaxed riverside route ideal for casual riders, stopping at scenic overlooks and a hidden café for refreshments. Bikes and helmets are provided.',
    highlights: [
      'Guided bike ride suitable for all levels',
      'Coffee stop at a local favorite café',
      'Panoramic views of the Seoul skyline',
    ],
    includes: ['Bike and helmet rental', 'Bottled water', 'Coffee voucher'],
    meetingPoint: 'Yeouido Hangang Park bike rental center',
    languages: ['English', 'Korean'],
  },
]

export const FEATURED_EVENT_SLUG = 'gyeongbokgung-palace-tour'

export const TRENDING_EVENT_SLUGS = [
  'seoul-skyline-night-cruise',
  'kimchi-making-class',
  'bukhansan-sunrise-hike',
  'han-river-picnic',
]

export const UPCOMING_EVENT_SLUGS = [
  'traditional-tea-ceremony',
  'busan-food-tasting',
  'han-river-bike-ride',
]

export const eventsBySlug = events.reduce<Record<string, EventDetail>>((acc, event) => {
  acc[event.slug] = event
  return acc
}, {})

export function getEventBySlug(slug: string) {
  return eventsBySlug[slug]
}

export function getEventsForSlugs(slugs: string[]) {
  return slugs.map((slug) => eventsBySlug[slug]).filter(Boolean)
}

export const allEvents = events
