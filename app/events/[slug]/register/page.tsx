import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock, MapPin, ArrowLeft, Users } from 'lucide-react'

import { getEventBySlug } from '@/lib/events'

type EventRegisterPageProps = {
  params: {
    slug: string
  }
}

export default function EventRegisterPage({ params }: EventRegisterPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 pb-4 pt-6">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-600 transition hover:bg-neutral-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">Reserve your spot</p>
            <h1 className="text-lg font-semibold">{event.title}</h1>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-md space-y-6 px-4 pb-16 pt-6">
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Event snapshot</h2>
          <div className="mt-4 space-y-3 text-sm text-neutral-600">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-neutral-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-neutral-400" />
              <span>
                {event.time} · {event.duration}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-neutral-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-neutral-400" />
              <span>{event.capacity}</span>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-neutral-900 px-4 py-3 text-white">
            <p className="text-xs uppercase tracking-wider text-white/60">Price per guest</p>
            <p className="text-xl font-semibold">₩{event.price.toLocaleString()}</p>
          </div>
        </section>

        <form
          action="#"
          method="post"
          className="space-y-5 rounded-3xl bg-white p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Kim Yuna"
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="phone">
              Phone number (optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="010-1234-5678"
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="guests">
              Number of guests
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min={1}
              max={20}
              defaultValue={1}
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-neutral-700" htmlFor="notes">
              Notes for your host
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Let us know about dietary needs or travel plans."
              className="mt-2 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-neutral-900 focus:bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Submit registration
          </button>
        </form>

        <p className="text-center text-xs text-neutral-500">
          A Local Korea host will reach out within 24 hours to confirm your booking.
        </p>
      </main>
    </div>
  )
}
