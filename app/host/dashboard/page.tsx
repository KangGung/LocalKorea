'use client'

export default function HostDashboard() {
  const kpis = [
    { label: 'Upcoming Events', value: 3 },
    { label: 'Tickets Sold (7d)', value: 128 },
    { label: 'Gross Revenue (₩)', value: '2,460,000' },
  ]

  const recent = [
    { id: 1, title: 'Traditional Tea Ceremony', buyer: 'Sophie L.', qty: 2, time: '5m ago' },
    { id: 2, title: 'Seoul Night Cruise', buyer: 'Arman R.', qty: 3, time: '23m ago' },
    { id: 3, title: 'Kimchi Class', buyer: 'Hannah K.', qty: 1, time: '1h ago' },
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-neutral-100">
        <div className="mx-auto max-w-md px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold tracking-tight">Host Dashboard</h1>
          <a href="/host/new" className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-sm active:scale-95">New Event</a>
        </div>
      </header>

      <main className="mx-auto max-w-md px-4 pb-24 space-y-8">
        {/* KPI cards */}
        <section className="grid grid-cols-3 gap-3 pt-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-2xl bg-neutral-50 p-3 text-center">
              <div className="text-xs text-neutral-500">{k.label}</div>
              <div className="text-lg font-bold mt-1">{k.value}</div>
            </div>
          ))}
        </section>

        {/* Recent registrations */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Recent Registrations</h2>
            <button className="text-sm text-neutral-500 hover:text-neutral-900">View all</button>
          </div>
          <ul className="space-y-2">
            {recent.map((r) => (
              <li key={r.id} className="flex items-center justify-between rounded-2xl bg-neutral-50 p-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{r.title}</p>
                  <p className="text-xs text-neutral-500 truncate">{r.buyer} · {r.qty} ticket(s)</p>
                </div>
                <span className="text-xs text-neutral-400">{r.time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Your events */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Your Events</h2>
            <a href="/host/new" className="text-sm text-neutral-500 hover:text-neutral-900">Create</a>
          </div>
          <div className="space-y-2">
            {['Tea Ceremony','Night Cruise','Kimchi Class'].map((t,i)=> (
              <div key={i} className="rounded-2xl border border-neutral-100 p-3 flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">{t}</p>
                  <p className="text-xs text-neutral-500">Published · 24 seats left</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs px-2 py-1 rounded-lg bg-neutral-900 text-white">Manage</button>
                  <button className="text-xs px-2 py-1 rounded-lg bg-neutral-100">Share</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
