import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'
import { restaurant, hours } from '../content/restaurant'

export default function About() {
  return (
    <div className="page-transition">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h1 className="font-serif text-4xl text-ink">Why {restaurant.name} exists</h1>
            <p className="mt-5 text-herb">
              {restaurant.founderName} started {restaurant.name} in {restaurant.founded}, cooking her mother's
              phở recipe out of a shared commercial kitchen for neighbors in Linda Vista, after years cooking in
              other people's restaurants where the broth was always the thing there wasn't enough time for. The
              stockpot that simmers every night here traces back to that same first batch.
            </p>
            <p className="mt-4 text-herb">
              The model is still simple: cook a short, well-made menu instead of a long, mediocre one, and
              simmer the broth 12 hours whether anyone's watching or not. Linda Vista was never a business-plan
              decision — {restaurant.founderName.split(' ')[0]} grew up a few blocks from where the restaurant
              now stands.
            </p>
            <p className="mt-6 font-serif text-lg text-jade">{restaurant.founderName}, founder</p>
          </div>
          <DecorPanel
            variant={5}
            className="h-72 w-full sm:h-96"
            alt="Chef ladling broth into a bowl of phở"
          />
        </div>
      </section>

      <section className="border-y border-black/5 bg-rice">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Visit</p>
            <p className="text-herb">{restaurant.address}</p>
            <p className="mt-2 text-herb">
              <a href={restaurant.phoneHref} className="hover:text-ink">
                {restaurant.phone}
              </a>
            </p>
            <p className="mt-1 text-herb">
              <a href={`mailto:${restaurant.email}`} className="hover:text-ink">
                {restaurant.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-herb">
              Free parking lot behind the building, right on Linda Vista Rd.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Hours</p>
            <ul className="space-y-1 text-herb">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4 border-b border-black/5 py-1.5 text-sm last:border-0">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl text-ink">Come taste the broth for yourself</h2>
        <NavLink to="/contact" className="btn-primary mt-6 inline-flex">
          Order Takeout
        </NavLink>
      </section>
    </div>
  )
}
