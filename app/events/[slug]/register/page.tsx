import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'

import { allEvents, getEventBySlug } from '../../../../lib/events'

type RegisterPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return allEvents.map((event) => ({ slug: event.slug }))
}

export default function RegisterPage({ params }: RegisterPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-3">
          <Link
            href={`/events/${event.slug}`}
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <span className="text-sm text-neutral-400">/</span>
          <p className="truncate text-sm font-semibold text-neutral-900">Register</p>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 py-6 space-y-6">
        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <h1 className="text-xl font-bold text-neutral-900">Reserve your spot</h1>
          <p className="mt-1 text-sm text-neutral-600">
            Fill out the quick form below and a host will confirm your reservation for the {event.title}.
          </p>

          <div className="mt-4 space-y-3 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
            <div className="flex items-start gap-3">
              <CalendarDays className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">{event.fullDate}</p>
                <p>{event.subtitle}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-neutral-900" />
              <div>
                <p className="font-semibold text-neutral-900">{event.timeRange}</p>
                <p>
                  {event.currency}
                  {event.price.toLocaleString()} per guest
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-5 shadow-sm">
          <form className="space-y-4" action="#" method="post">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-neutral-900">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-neutral-900">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="guests" className="text-sm font-medium text-neutral-900">
                Number of guests
              </label>
              <input
                id="guests"
                name="guests"
                type="number"
                min={1}
                defaultValue={1}
                className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
              />
            </div>

            <div>
              <label htmlFor="notes" className="text-sm font-medium text-neutral-900">
                Notes for the host
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="mt-1 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                placeholder="Share anything the host should know (optional)"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Submit request
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
