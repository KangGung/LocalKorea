import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Languages,
  MapPin,
  Ticket,
} from 'lucide-react'

import { allEvents, getEventBySlug } from '../../../lib/events'

type EventPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }))
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-md px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <span className="text-sm text-neutral-400">/</span>
          <p className="truncate text-sm font-semibold text-neutral-900">{event.title}</p>
        </div>
      </header>

      <main className="mx-auto max-w-md bg-white">
        <div className="relative h-64 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        <div className="px-4 py-6 space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Local Experience</p>
            <h1 className="text-2xl font-extrabold leading-snug text-neutral-900">{event.title}</h1>
            <p className="text-sm text-neutral-600">{event.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-3 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">Date</p>
                <p>{event.fullDate}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">Time</p>
                <p>{event.timeRange}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">Meeting Point</p>
                <p>{event.meetingPoint}</p>
                <p className="text-xs text-neutral-500">{event.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Languages className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">Languages</p>
                <p>{event.languages.join(' · ')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Ticket className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">Price</p>
                <p>
                  {event.currency}
                  {event.price.toLocaleString()} per guest
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-neutral-900">About this experience</h2>
            <p className="text-sm leading-relaxed text-neutral-700">{event.summary}</p>
            <p className="text-sm leading-relaxed text-neutral-700">{event.description}</p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-semibold text-neutral-900">Highlights</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              {event.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-semibold text-neutral-900">What&rsquo;s included</h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              {event.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center justify-between gap-4 px-4 py-4">
          <div>
            <p className="text-xs text-neutral-500">From</p>
            <p className="text-lg font-semibold text-neutral-900">
              {event.currency}
              {event.price.toLocaleString()}
            </p>
          </div>
          <Link
            href={`/events/${event.slug}/register`}
            className="flex-1 rounded-2xl bg-neutral-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
