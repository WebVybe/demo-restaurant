import { Link } from 'react-router-dom'
import { restaurant, hours } from '../content/restaurant'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-rice">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-medium text-jade">{restaurant.name}</p>
            <p className="mt-2 max-w-[220px] text-sm text-herb">{restaurant.tagline}</p>
          </div>

          <div className="text-sm text-herb">
            <p className="eyebrow mb-3 text-jade">Visit</p>
            <p>{restaurant.address}</p>
            <p className="mt-2">
              <a href={restaurant.phoneHref} className="hover:text-ink">
                {restaurant.phone}
              </a>
            </p>
            <p className="mt-1">
              <a href={`mailto:${restaurant.email}`} className="hover:text-ink">
                {restaurant.email}
              </a>
            </p>
            <p className="mt-3 text-xs text-herb/80">
              Private events &amp; catering:{' '}
              <a href={`mailto:${restaurant.eventsEmail}`} className="hover:text-ink">
                {restaurant.eventsEmail}
              </a>
            </p>
          </div>

          <div className="text-sm text-herb">
            <p className="eyebrow mb-3 text-jade">Hours</p>
            <ul className="space-y-1">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-herb">
            <p className="eyebrow mb-3 text-jade">Explore</p>
            <ul className="space-y-1">
              <li>
                <Link to="/menu" className="hover:text-ink">
                  Menu & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-ink">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-ink">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-herb/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
          <p>
            Portfolio demo built by{' '}
            <a href="https://webvybe.app" className="underline hover:text-ink">
              WebVybe
            </a>
            , a fictional business created to showcase the restaurant/cafe site template.
          </p>
        </div>
      </div>
    </footer>
  )
}
