import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Languages,
  Users,
} from 'lucide-react'

import { getEventBySlug } from '@/lib/events'

type EventPageProps = {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="relative h-72 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div
          className="absolute inset-x-0 top-0 flex items-center justify-between px-4"
          style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 1rem)' }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <Link
            href={`/events/${event.slug}/register`}
            className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white"
          >
            Register
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-white/90">Local Korea Experience</p>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight drop-shadow-sm">{event.title}</h1>
          <p className="mt-2 text-sm text-white/85">
            {event.subtitle ?? `${event.location.split(',')[0]} · ${event.language}`}
          </p>
        </div>
      </div>

      <main className="mx-auto -mt-10 max-w-md space-y-8 px-4 pb-24">
        <section className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Event details</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2 rounded-2xl bg-neutral-50 p-3">
              <CalendarDays className="mt-0.5 h-4 w-4 text-neutral-500" />
              <div>
                <p className="font-semibold">Date</p>
                <p className="text-neutral-500">{event.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl bg-neutral-50 p-3">
              <Clock className="mt-0.5 h-4 w-4 text-neutral-500" />
              <div>
                <p className="font-semibold">Time</p>
                <p className="text-neutral-500">{event.time}</p>
                <p className="text-xs text-neutral-400">Duration: {event.duration}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl bg-neutral-50 p-3">
              <MapPin className="mt-0.5 h-4 w-4 text-neutral-500" />
              <div>
                <p className="font-semibold">Meeting point</p>
                <p className="text-neutral-500">{event.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-2xl bg-neutral-50 p-3">
              <Languages className="mt-0.5 h-4 w-4 text-neutral-500" />
              <div>
                <p className="font-semibold">Languages</p>
                <p className="text-neutral-500">{event.language}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-neutral-900 px-4 py-3 text-white">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/60">Price per guest</p>
              <p className="text-2xl font-bold">₩{event.price.toLocaleString()}</p>
            </div>
            <Link
              href={`/events/${event.slug}/register`}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-100"
            >
              Sign up
            </Link>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-lg font-semibold">What to expect</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{event.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Highlights</h3>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              {event.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Your host</h2>
          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500">
              {event.host.name
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </div>
            <div className="flex-1">
              <p className="font-semibold">{event.host.name}</p>
              <p className="text-sm text-neutral-500">{event.host.title}</p>
              <div className="mt-3 flex items-center gap-2 rounded-2xl bg-neutral-50 p-3 text-sm text-neutral-600">
                <Users className="h-4 w-4 text-neutral-400" />
                <span>{event.capacity}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
