# Local Korea v1.0 — Product Build Specification

*Prepared by: Jihoon Kang — CTO & Founder*

## 1. Vision & Core Objective
Local Korea is a mobile-first social experience platform that connects foreigners, expats, and locals in Korea through curated, bookable real-world experiences such as dance classes, Han River kayaking, and food tours.

**MVP must:**
- Feel clean, fast, and modern (like Airbnb or Frip, but friendlier).
- Let users discover → book → connect in one flow.
- Enable hosts to list events and manage participants easily.
- Work beautifully as a mobile web app first, then evolve into native.

## 2. Product Overview

| User Role | Capabilities |
| --- | --- |
| Guest (not signed in) | Browse experiences, view details, click "Book now" → redirected to login/signup. |
| User (logged in) | Book events, view upcoming bookings, manage profile, sign out. |
| Host (Phase 2) | Create & manage events, view attendees. |
| Admin | Manage all events, users, and bookings (via Supabase dashboard in MVP). |

## 3. System Architecture Overview
- **Architecture Pattern:** Serverless + Client-heavy SPA (Next.js App Router)
- **Core Stack:**
  - **Frontend:** Next.js 14, React 18, Tailwind CSS
  - **Auth & Database:** Supabase (PostgreSQL + Auth)
  - **Hosting:** Vercel (auto deploy via GitHub)
  - **Payments (Phase 2):** Toss Payments API or NaverPay (for foreigner accessibility)
  - **Analytics:** Google Analytics 4 + Vercel Analytics

**Directory Structure Example**
```
/app
  page.tsx              # Home screen
  /login/page.tsx       # Login & signup (Supabase UI)
  /profile/page.tsx     # User profile page
  /event/[slug]/page.tsx# Event detail page
/components
  HomeScreen.tsx
  EventCard.tsx
  EventDetail.tsx
  ProfileScreen.tsx
  BookingModal.tsx
  Header.tsx
/lib
  supabaseClient.ts
/public
  /images
/styles
  globals.css
  tailwind.config.js
```

## 4. Design System — "Local Korea Visual DNA"
- **Primary Color:** `#0F172A` (Deep navy)
- **Accent Color:** `#3B82F6` (Sky blue, used subtly)
- **Background:** `#FFFFFF`
- **Soft Background:** `#F9FAFB`
- **Font:** Inter + Pretendard (for Korean support)
- **Radius:** `1rem` (`rounded-2xl`)
- **Shadow:** `shadow-md` for cards, soft elevation
- **Animation:** `active:scale-95` on click for tactile feel

**Component Guidelines**
- **Header:** Sticky top, logo left, Profile button right.
- **Card:** Image (4:3 ratio), title, subtext, price.
- **Modal:** Full-screen on mobile, soft rounded, white background.
- **Button:** Pill shape, neutral background, hover elevation.

**Example Screens**
- **Home:** Featured event, trending cards, upcoming list.
- **Event Detail:** Image, title, host info, “Book now” sticky button.
- **Login:** Minimalist white card center screen.
- **Profile:** Avatar, name, “My Bookings” list.

## 5. Frontend Implementation
- **Framework:** Next.js 14 (App Router)
- **Libraries:** React 18, Tailwind CSS (utility-first styling)

**Key Files**
- `/app/page.tsx` → Home screen
- `/components/EventDetail.tsx` → Dynamic event page
- `/components/BookingModal.tsx` → Booking logic
- `/app/login/page.tsx` → Supabase Auth UI
- `/app/profile/page.tsx` → User profile (bookings display)

**Authentication Flow**
1. Supabase handles email/password or Google login.
2. After login, redirect to `/profile`.
3. Persistent session stored via Supabase.

**Booking Flow**
1. User clicks “Book now”.
2. If not logged in → redirect to `/login`.
3. If logged in → open `BookingModal`.
4. User confirms quantity → insert row into Supabase `bookings` table.
5. Confirmation toast → redirect to `/profile`.

**Responsive Behavior**
- Mobile-first (375–768px).
- Sticky bottom CTA buttons.
- Scrollable cards for “Trending This Week”.

## 6. Backend (Supabase)

**Database Tables**

### `events`
| Field | Type | Description |
| --- | --- | --- |
| id | uuid | Primary key |
| slug | text | Unique URL slug |
| title | text | Event name |
| subtitle | text | Subheader |
| description | text | Full description |
| image_url | text | Main image |
| date | date | Event date |
| price_krw | integer | Price in won |
| host_id | uuid | References `auth.users` |
| created_at | timestamptz | default now() |

### `bookings`
| Field | Type | Description |
| --- | --- | --- |
| id | uuid | Primary key |
| user_id | uuid | References `auth.users` |
| event_id | uuid | References `events` |
| qty | int | Number of tickets |
| price_krw | int | Total price |
| created_at | timestamptz | default now() |

**Auth**
- Managed by Supabase Auth.
- Row Level Security (RLS) enabled.
- Policies: users can only see their own bookings.

## 7. DevOps / Deployment Setup
- **Hosting:** Vercel for frontend (connected to GitHub `main` branch); Supabase Cloud for backend (DB + storage + auth).
- **Deployment Process:** Developer pushes to `main`, Vercel auto-builds and deploys to production. Supabase auto-hosts database (no manual deploy).

**Environments**
| Env | Purpose | Branch |
| --- | --- | --- |
| staging | QA testing | `dev` |
| production | Live | `main` |

**Environment Variables (Vercel)**
```
NEXT_PUBLIC_SUPABASE_URL=<your-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

## 8. Team Structure & Responsibilities
- **Design (Figma):** Finalize UI components for Home, Event Detail, Booking Modal, Profile, Login. Maintain light blue color theme.
- **Frontend Dev (Next.js):** Build all pages and components from Figma → Next.js + Tailwind. Integrate Supabase client. Ensure responsiveness.
- **Backend Dev (Supabase):** Manage schema, RLS, policies, data seeding. Integrate payments (Toss/NaverPay) in Phase 2.
- **QA / Test Engineer:** Verify responsive layouts, Supabase login flows, booking inserts. Test on Chrome + Safari mobile.
- **Product Lead:** Define MVP scope & features, oversee consistency and brand.
- **CTO (You):** Review pull requests, ensure architecture consistency, handle environment variables, and maintain project documentation.

## 9. Roadmap
| Phase | Timeline | Goal |
| --- | --- | --- |
| Phase 1: MVP Launch | Week 1–4 | Static events, booking flow, Supabase auth |
| Phase 2: Host Dashboard | Week 5–8 | Host can add events, view attendees |
| Phase 3: Payments & Reviews | Week 9–12 | Add TossPay & user reviews |
| Phase 4: Notifications & Chat | Week 13–16 | Real-time messaging between hosts & users |
| Phase 5: International Expansion | Q2 2026 | English + Korean full localization |

## 10. Core Principles for the Team
1. **Design Simplicity:** Fewer screens, more clarity. Every element must have purpose.
2. **Mobile First:** 90% of traffic is mobile — all designs should start there.
3. **Speed > Perfection:** Focus on releasing functional MVPs quickly and iterating.
4. **One Visual Language:** Everything must match the “Local Korea V Next” UI (light, modern, rounded).
5. **Version Control Discipline:** One main repo (Next.js + Supabase). Branch per feature.
6. **Transparency:** Use Supabase dashboard for live data visibility.
7. **User First:** Always test flows as if you’re a tourist trying to join a class in Seoul for the first time.

## 11. Optional Add-ons (After MVP)
- Push Notifications (OneSignal or Firebase)
- Webhooks for payments
- Google Maps API for event locations
- Email confirmations via Supabase Edge Functions
- Chat system using Supabase Realtime

## 12. Final Deliverables (for MVP Launch)
- `local-korea.vercel.app` live and functional
- Users can log in, view events, book experiences, and view bookings
- Admin/host can view bookings in Supabase dashboard
- All code documented in `/docs` folder
- Figma file matching deployed UI

## 13. One-line Summary to Your Team
“We are building Local Korea v1.0, a mobile-first social experience platform for travelers and locals in Korea — built with Next.js + Supabase + Tailwind, designed for simplicity, speed, and connection. Every feature must feel as seamless as Airbnb and as warm as a local guide.”
