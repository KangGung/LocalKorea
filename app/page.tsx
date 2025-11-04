'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search as SearchIcon, SlidersHorizontal, Home as HomeIcon, Heart, User } from 'lucide-react'

import {
  FEATURED_EVENT_SLUG,
  TRENDING_EVENT_SLUGS,
  UPCOMING_EVENT_SLUGS,
  eventsBySlug,
  getEventsForSlugs,
} from '../lib/events'

export default function Home() {
  const featured = eventsBySlug[FEATURED_EVENT_SLUG]
  const trending = getEventsForSlugs(TRENDING_EVENT_SLUGS)
  const upcoming = getEventsForSlugs(UPCOMING_EVENT_SLUGS)

  if (!featured) {
    throw new Error('Featured event not found')
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-tight">Local Korea</h1>
          <button aria-label="Search" className="p-2 rounded-xl hover:bg-neutral-100 active:scale-95">
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Search row */}
        <div className="mx-auto max-w-md px-4 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2 bg-neutral-100 rounded-2xl px-3 py-2">
              <SearchIcon className="h-5 w-5 shrink-0" />
              <input
                placeholder="Search events, places, hosts..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
            <button className="p-2 rounded-2xl bg-neutral-900 text-white active:scale-95">
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 pb-28 space-y-8">
        {/* Featured hero */}
        <section aria-label="Featured Event">
          <Link
            href={`/events/${featured.slug}`}
            className="relative block h-56 rounded-3xl overflow-hidden shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-4 text-white">
              <p className="text-xs font-semibold tracking-wide uppercase opacity-90">Featured Event</p>
              <h2 className="text-2xl font-extrabold leading-tight drop-shadow-sm">{featured.title}</h2>
              <p className="text-sm opacity-90">{featured.subtitle}</p>
            </div>
          </Link>
        </section>

        {/* Trending carousel */}
        <section aria-label="Trending This Week" className="space-y-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-bold">Trending This Week</h3>
            <button className="text-sm text-neutral-500 hover:text-neutral-900">See all</button>
          </div>
          <div className="-mx-4 px-4 overflow-x-auto">
            <div className="flex gap-3 w-max">
              {trending.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="relative h-40 w-40 rounded-3xl overflow-hidden shadow-sm active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold leading-snug drop-shadow">
                    {event.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming list */}
        <section aria-label="Upcoming Events" className="space-y-3">
          <h3 className="text-lg font-bold">Upcoming Events</h3>
          <ul className="space-y-3">
            {upcoming.map((event) => (
              <li key={event.slug}>
                <Link
                  href={`/events/${event.slug}`}
                  className="flex items-center gap-3 bg-neutral-50 rounded-2xl p-2 hover:bg-neutral-100 transition active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{event.title}</p>
                    <p className="text-xs text-neutral-500">{event.shortDate}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-500">Price</p>
                    <p className="text-sm font-semibold">
                      {event.currency}
                      {event.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Sticky bottom nav */}
      <nav className="fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-neutral-200">
        <div className="mx-auto max-w-md px-6 py-3 grid grid-cols-4 gap-2 text-xs">
          <button className="flex flex-col items-center gap-1 text-neutral-900 font-semibold">
            <HomeIcon className="h-6 w-6" />
            Home
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-900">
            <SearchIcon className="h-6 w-6" />
            Search
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-900">
            <Heart className="h-6 w-6" />
            Saved
          </button>
          <button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-900">
            <User className="h-6 w-6" />
            Profile
          </button>
        </div>
      </nav>
    </div>
  )
}
