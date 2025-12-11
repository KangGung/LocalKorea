'use client'

import Image from 'next/image'
import { Search as SearchIcon, SlidersHorizontal, Home as HomeIcon, Heart, User } from 'lucide-react'


const featured = {
  title: 'Gyeongbokgung Palace Tour',
  subtitle: 'Seoul · English/Korean',
  image: 'https://images.unsplash.com/photo-1514388619276-6ae38d1f7a4e?q=80&w=1600&auto=format&fit=crop',
}

const trending = [
  { title: 'Seoul Skyline Night Cruise', image: 'https://images.unsplash.com/photo-1583397593091-5f83e3874c2f?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Kimchi Making Class', image: 'https://images.unsplash.com/photo-1604908554055-0c3b7b4bd86d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Hiking in Bukhansan', image: 'https://images.unsplash.com/photo-1595147389795-37094173bfd2?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Han River Picnic', image: 'https://images.unsplash.com/photo-1608354584374-2f7d8a6aa8f5?q=80&w=1200&auto=format&fit=crop' },
]

const upcoming = [
  { title: 'Traditional Tea Ceremony', date: 'Apr 25', price: 15000, image: 'https://images.unsplash.com/photo-1523908957990-36f52d52c3b8?q=80&w=800&auto=format&fit=crop' },
  { title: 'Busan Food Tasting', date: 'Apr 27', price: 30000, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop' },
  { title: 'Han River Bike Ride', date: 'Apr 29', price: 10000, image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-md px-5 py-3 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-tight">Local Korea</h1>
          <button aria-label="Search" className="p-2 rounded-2xl hover:bg-neutral-100 active:scale-95 transition">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Search row */}
        <div className="mx-auto max-w-md px-5 pb-4">
          <div className="flex items-center gap-3">
            <label className="flex-1 flex items-center gap-2 bg-neutral-100 rounded-2xl px-3 py-2 shadow-inner focus-within:ring-2 focus-within:ring-neutral-200">
              <SearchIcon className="h-5 w-5 shrink-0 text-neutral-500" />
              <input
                placeholder="Search"
                className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400"
                aria-label="Search events"
              />
            </label>
            <button className="p-2 rounded-2xl bg-neutral-900 text-white active:scale-95 transition shadow-sm">
              <SlidersHorizontal className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-5 pb-32 space-y-10">
        {/* Featured hero */}
        <section aria-label="Featured Event">
          <div className="relative h-60 rounded-3xl overflow-hidden shadow-lg">
            <Image src={featured.image} alt={featured.title} fill priority sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-5 text-white space-y-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase opacity-90">Featured Event</p>
              <h2 className="text-[28px] leading-tight font-extrabold drop-shadow">{featured.title}</h2>
              <p className="text-sm opacity-90">{featured.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Trending carousel */}
        <section aria-label="Trending This Week" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Trending This Week</h3>
            <button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 active:scale-95 transition">See all</button>
          </div>
          <div className="-mx-5 px-5 overflow-x-auto scrollbar-none">
            <div className="flex gap-3 w-max">
              {trending.map((item, i) => (
                <button key={i} className="relative h-44 w-36 rounded-3xl overflow-hidden shadow-md active:scale-95 transition">
                  <Image src={item.image} alt={item.title} width={160} height={176} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold leading-snug drop-shadow">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming list */}
        <section aria-label="Upcoming Events" className="space-y-4">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <ul className="space-y-3">
            {upcoming.map((ev, i) => (
              <li key={i} className="flex items-center gap-4 bg-neutral-50 rounded-2xl p-3 hover:bg-neutral-100 transition active:scale-[0.99]">
                <Image src={ev.image} alt={ev.title} width={64} height={64} className="h-16 w-16 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-neutral-900 truncate">{ev.title}</p>
                  <p className="text-xs text-neutral-500">Seoul · Local Host</p>
                </div>
                <div className="text-right text-sm font-semibold text-neutral-900">
                  <p>{ev.date}</p>
                  <p className="text-xs font-medium text-neutral-500">₩ {ev.price.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Sticky bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-neutral-200">
        <div className="mx-auto max-w-md px-8 py-3 grid grid-cols-4 gap-2 text-xs">
          <button className="flex flex-col items-center gap-1 text-neutral-900 font-semibold">
            <HomeIcon className="h-6 w-6" aria-hidden />
            Home
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900">
            <SearchIcon className="h-6 w-6" aria-hidden />
            Search
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900">
            <Heart className="h-6 w-6" aria-hidden />
            Saved
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900">
            <User className="h-6 w-6" aria-hidden />
            Profile
          </button>
        </div>
      </nav>
    </div>
  )
}
