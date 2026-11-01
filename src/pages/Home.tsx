import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { restaurant, faqs, menuCategories, groupDining } from '../content/restaurant'

const highlights = menuCategories.slice(0, 3).map((c, i) => ({
  id: c.id,
  title: c.title,
  blurb: c.intro,
  from: c.items[0].price,
  variant: ((i % 5) + 1) as 1 | 2 | 3 | 4 | 5,
}))

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero — one dominant visual, one short headline, one primary CTA.
          No competing headline/graphic-panel split, no second matched button. */}
      <section className="relative">
        <DecorPanel
          rounded={false}
          variant={2}
          className="h-[68vh] min-h-[420px] w-full sm:h-[82vh]"
          alt="Warm Vietnamese restaurant dining room"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-jade-deep/80 via-jade-deep/15 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-6 pb-12 sm:pb-16">
            <p className="eyebrow mb-3 text-rice">{restaurant.neighborhood}</p>
            <h1 className="max-w-2xl font-serif text-4xl leading-[1.1] text-paper sm:text-5xl lg:text-[3.4rem]">
              {restaurant.tagline}
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <NavLink to="/contact" className="btn-primary">
                Order Takeout
              </NavLink>
              <NavLink
                to="/menu"
                className="text-sm font-semibold text-paper underline decoration-paper/40 underline-offset-4 transition-colors hover:decoration-paper"
              >
                See Menu
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* This Month's Special — its own prominent module, not a badge
          buried inside the hero. */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <DecorPanel
            variant={3}
            className="h-72 w-full sm:h-96"
            alt="Grilled pork patties and vermicelli with fresh herbs"
          />
          <div>
            <span className="badge">This Month's Special</span>
            <h2 className="mt-4 font-serif text-3xl text-ink sm:text-4xl">{restaurant.featureItem.name}</h2>
            <p className="mt-4 max-w-md text-base text-herb">
              {restaurant.featureItem.blurb.replace(/^This month's special: /, '')}
            </p>
            <p className="mt-3 max-w-md text-sm text-herb">
              {restaurant.featureItem.cadence} Grilled to order, same as everything else on the menu.
            </p>
            <NavLink to="/menu#pho" className="mt-6 inline-block text-sm font-semibold text-turmeric-deep hover:underline">
              See it on the menu →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Menu highlights — image-first tiles, no card border/background
          chrome. The photo is the primary surface; the "order ahead"
          message lives here as a short caption instead of an isolated
          trust-bar section. */}
      <section className="mx-auto max-w-6xl px-6 py-4 sm:py-8">
        <div className="mb-10 flex flex-col gap-2 border-t border-black/5 pt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-3">What we cook</p>
            <h2 className="font-serif text-3xl text-ink">Three pots, one kitchen</h2>
            <p className="mt-3 max-w-md text-sm text-herb">
              Weekend tables fill up by 6pm, so order ahead through the contact form and we'll have it ready at
              the counter.
            </p>
          </div>
          <NavLink to="/menu" className="text-sm font-semibold text-turmeric-deep hover:underline">
            View full menu & pricing →
          </NavLink>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((h) => (
            <NavLink key={h.id} to={`/menu#${h.id}`} className="group block">
              <DecorPanel
                variant={h.variant}
                className="h-56 w-full transition-transform duration-300 group-hover:scale-[1.02] sm:h-64"
                alt={h.title}
              />
              <h3 className="mt-4 font-serif text-xl text-ink">{h.title}</h3>
              <p className="mt-1 text-sm text-herb">{h.blurb}</p>
              <p className="mt-2 text-sm font-semibold text-turmeric-deep">From {h.from}</p>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Group Dining — full-bleed band, breaking the metronome of
          identical max-w-6xl centered blocks. */}
      <section className="relative isolate mt-20 overflow-hidden border-y border-black/5">
        <DecorPanel
          rounded={false}
          variant={4}
          className="absolute inset-0 h-full w-full"
          alt="Family-style Vietnamese dishes shared at a long table"
        />
        <div className="absolute inset-0 bg-jade/82" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3 text-rice">Private dining room</p>
            <h2 className="font-serif text-3xl text-paper">
              {groupDining.name}: {groupDining.price}
            </h2>
            <p className="mt-4 max-w-md text-sm text-rice/90">
              Built for birthdays, office lunches, and family gatherings. Shared dishes, no menu-juggling, ready
              when your party arrives.
            </p>
            <NavLink to="/contact" className="btn-primary mt-6 !bg-turmeric !text-jade-deep hover:!bg-turmeric-deep">
              Ask About Group Dining
            </NavLink>
          </div>
          <ul className="space-y-3">
            {groupDining.bullets.map((b) => (
              <li key={b} className="flex gap-3 rounded-xl bg-white/5 p-4 text-sm text-rice/95">
                <span className="mt-0.5 text-turmeric">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Private events & catering — genuinely text-first content, so the
          bordered-white-card idiom stays here. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-3">Beyond the table</p>
        <h2 className="mb-3 font-serif text-3xl text-ink">Private events &amp; catering</h2>
        <p className="mb-10 max-w-xl text-sm text-herb">{restaurant.privateEventNotice}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-serif text-xl text-ink">Private Dining &amp; Parties</h3>
            <p className="mt-2 text-sm text-herb">
              Birthdays, work lunches, small celebrations: tell us the occasion, headcount, and date. Two weeks'
              notice for a spot on the schedule.
            </p>
            <NavLink to="/contact" className="mt-4 inline-block text-sm font-semibold text-turmeric-deep hover:underline">
              Start a private event request →
            </NavLink>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white p-6">
            <h3 className="font-serif text-xl text-ink">Catering Trays</h3>
            <p className="mt-2 text-sm text-herb">
              Noodle and rice trays for offices and small gatherings. Send headcount and date to{' '}
              <a href={`mailto:${restaurant.eventsEmail}`} className="font-medium text-jade hover:underline">{restaurant.eventsEmail}</a> for a quote.
            </p>
            <NavLink to="/contact" className="mt-4 inline-block text-sm font-semibold text-turmeric-deep hover:underline">
              Or use the contact form →
            </NavLink>
          </div>
        </div>
      </section>

      {/* FAQ preview — also text-first, keeps the bordered-card idiom. */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow mb-3">Good to know</p>
        <h2 className="mb-8 font-serif text-3xl text-ink">A few things first-timers ask</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {faqs.slice(0, 4).map((f) => (
            <div key={f.q} className="rounded-2xl border border-black/5 bg-white p-6">
              <p className="font-medium text-ink">{f.q}</p>
              <p className="mt-2 text-sm text-herb">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-rice px-8 py-14 text-center">
          <h2 className="font-serif text-3xl text-ink">Hungry? We open at 11am.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-herb">
            Open Tuesday through Sunday. Order ahead for pickup or just walk in: either way, tell us what sounds
            good.
          </p>
          <NavLink to="/contact" className="btn-primary mt-7 inline-flex">
            Order Takeout
          </NavLink>
        </div>
      </section>
    </div>
  )
}
