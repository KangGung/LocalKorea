# Local Korea Product & Design Overview

## 1) App Overview
### App Type & Purpose
- **Type:** Mobile-first PWA marketplace connecting travelers with curated local experiences in Korea.
- **Purpose:** Help visitors quickly discover, book, and manage authentic tours/events while enabling local hosts to publish and track offerings.

### Core Features (5–7)
1. Curated home feed with filters (location, date, category, budget).
2. Rich experience detail pages with media galleries, accessibility notes, and host credibility signals.
3. Frictionless booking/checkout with calendar availability, attendee counts, and secure payments (placeholder for gateway integration).
4. Saved favorites and personalized recommendations driven by recent searches.
5. Host dashboard with performance insights (bookings, revenue, ratings).
6. Guided host publishing flow with validation, draft saving, and preview.
7. Notifications for booking status changes and host updates (in-app + email-ready).

### User Flow (Guest)
1. Land on home feed → browse featured and nearby experiences.
2. Apply filters → open an experience detail page.
3. Review schedule, accessibility details, and host profile → choose date/time.
4. Proceed to checkout → confirm attendees and payment details.
5. Receive confirmation → view booking in trips page (future) → access directions and support.

### Page Structure
- **Home Feed (/):** Surfacing featured and filtered experiences with quick actions to view details or save.
- **Experience Details (/experiences/[id]):** Deep info, media, availability, and booking entry.
- **Checkout (/checkout):** Confirmation of selected slot, attendees, and payment submission.
- **Host Dashboard (/host/dashboard):** Metrics, upcoming bookings, and quick links to edit listings.
- **New Experience Form (/host/new):** Stepwise form for creating or updating listings with validation.

## 2) Page Architectures
For each page: purpose, layout structure, components, interactions, navigation, and states.

### Home Feed
- **Purpose:** Quickly surface relevant experiences and drive users into details.
- **Structure:** Header (logo, search, profile CTA) → filter bar → hero/featured carousel → cards grid/list → footer links.
- **Components:** Search field with autosuggest, filter chips, category pills, experience cards (image, title, rating, price, badges), save button, pagination/infinite loader.
- **Interactive Elements:** Search input, filter toggles, save/unsave, open details, load more.
- **Navigation:** Links to detail pages, host dashboard (for hosts), auth entry.
- **States:** Loading skeletons for cards; empty state with “no matches” copy; error banner with retry.

### Experience Details
- **Purpose:** Provide confidence to book through rich content and trust signals.
- **Structure:** Media gallery → title & meta (location, ratings, duration) → price & primary CTA → schedule selector → description & itinerary → accessibility notes → host profile → reviews → related experiences.
- **Components:** Carousel with thumbnails, breadcrumb, badges (accessible, family-friendly), availability calendar, quantity stepper, accordions for itinerary/FAQs, review list, sticky booking bar on mobile.
- **Interactive Elements:** Date/time selection, attendee stepper, add to favorites, start checkout, share.
- **Navigation:** Back to results, proceed to checkout, host profile link, related experience links.
- **States:** Loading placeholders for media and text; sold-out indicators; error toast for booking conflicts; empty reviews placeholder.

### Checkout
- **Purpose:** Confirm booking details and collect payment info with minimal friction.
- **Structure:** Progress header → summary card (date/time, attendees, pricing) → traveler details form → payment method section → terms/consent → confirmation CTA.
- **Components:** Form fields with inline validation, price breakdown, promo code input, consent checkbox, submission button, status banner.
- **Interactive Elements:** Edit attendees, apply promo, choose payment method, submit payment.
- **Navigation:** Back to details, link to support, post-submit link to itinerary/receipt.
- **States:** Loading spinner during payment; error inline alerts; disabled CTA until required fields valid; success confirmation with next steps.

### Host Dashboard
- **Purpose:** Give hosts visibility into performance and operations.
- **Structure:** Header with role switcher → KPI cards → bookings table → reviews snippet → quick actions (create/edit experience) → resources/help.
- **Components:** KPI tiles (revenue, bookings, rating), tabbed tables (upcoming/past), filters by date/status, mini charts, alerts for required actions, CTA buttons.
- **Interactive Elements:** Filter tables, open booking drawer, navigate to edit listing, export CSV (future), toggle time range.
- **Navigation:** Links to new experience form, listing edit pages, support docs.
- **States:** Loading skeletons for tiles/table; empty state for no bookings; error banner with retry.

### New Experience Form
- **Purpose:** Guide hosts through publishing high-quality listings.
- **Structure:** Multi-step form (Basics → Details → Media → Availability → Pricing → Review & Publish) with progress indicator and save-as-draft.
- **Components:** Text inputs, textareas with character counts, dropdowns, tag selectors, file uploader with preview, schedule picker, price inputs, accessibility checklist, summary preview card.
- **Interactive Elements:** Step navigation (next/back), inline validation, photo reorder/delete, save draft, preview listing, publish CTA.
- **Navigation:** Back to dashboard, preview page, publish confirmation.
- **States:** Per-step validation errors; upload progress; disabled publish until required fields complete; draft saved toast.

## 3) Design System
### Color Palette (hex)
- **Primary:** Indigo 600 `#4F46E5` (buttons, highlights); Indigo 50 `#EEF2FF` (background accents).
- **Secondary:** Teal 500 `#14B8A6` (supporting actions); Teal 50 `#E6FFFA` (secondary backgrounds).
- **Neutrals:** Slate 900 `#0F172A`, Slate 700 `#334155`, Slate 500 `#64748B`, Slate 300 `#CBD5E1`, Slate 100 `#F1F5F9`, White `#FFFFFF`.
- **Feedback:** Success `#22C55E`, Warning `#F59E0B`, Error `#EF4444`, Info `#0EA5E9`.
- **Text Contrast:** Body text Slate 900 on white; inverse text White on Indigo 600 meets WCAG AA.

### Typography
- **Headings:** Inter, bold; H1 32/40px, H2 28/36px, H3 24/32px.
- **Body:** Inter, regular; Body L 18/28px, Body M 16/24px, Body S 14/20px.
- **Monospace (for code/status):** JetBrains Mono, 14/20px.
- **Line Weights:** Regular 400, Medium 500, Bold 700.

### Spacing & Sizing Scale (4px base)
- 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px steps.
- Container widths: 480 (mobile), 768 (tablet), 1024/1280 (desktop). Gutters: 16px mobile, 24px tablet+, max width 1200px.

### Components (Reusable)
- Buttons (primary, secondary, ghost, destructive) with focus rings and disabled styles.
- Form controls (input, select, textarea, checkbox, radio, toggle) with helper/error text and 44px min touch targets.
- Cards (experience, KPI, summary) using shadow-sm and rounded-lg; support header/footer slots.
- Navigation (top bar with search/profile, tabs, breadcrumbs, pagination, stepper).
- Overlays (modal, drawer, toast) with accessible labels and keyboard traps.
- Data display (badges, chips, tables with responsive stacking, empty/error/loader components).

### Engineering & Accessibility Standards
- Semantic HTML and ARIA labels; all interactive elements keyboard-focusable.
- WCAG AA color contrast and focus indicators; provide skip-to-content link.
- Responsive flex/grid layouts (avoid absolute positioning except for non-obscuring badges).
- Reusable component primitives with variants (e.g., `Button`, `InputField`, `Card`, `Modal`).
- Media: use `alt` text, prefers-reduced-motion support for animations, use `<picture>` for responsive images.
- Forms: client-side validation with clear error messaging and required markers; support inline help.
- Code quality: modular file structure, TypeScript types, linting/formatting, maintainable and well-documented components.

