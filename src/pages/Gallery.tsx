import { NavLink } from 'react-router-dom'
import DecorPanel from '../components/DecorPanel'

const panels: { label: string; span?: string; variant: 1 | 2 | 3 | 4 | 5 }[] = [
  { label: 'The dining room', span: 'sm:col-span-2 sm:row-span-2', variant: 2 },
  { label: 'Phở bò, table-side', variant: 1 },
  { label: 'Bánh mì counter', variant: 3 },
  { label: 'Cà phê sữa đá', variant: 4 },
  { label: 'Fresh herbs & limes', variant: 5 },
  { label: 'The kitchen line', variant: 2 },
]

export default function Gallery() {
  return (
    <div className="page-transition mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow mb-3">Gallery</p>
      <h1 className="font-serif text-4xl text-ink">A feel for the kitchen</h1>
      <p className="mt-4 max-w-2xl text-herb">
        This is a portfolio demo, so there's no real restaurant to photograph yet: the panels below are
        placeholders standing in for real photography of this specific location, not photos of a real Lemongrass
        & Lime. Real photography would replace these before any actual launch.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:[grid-template-rows:repeat(3,10rem)]">
        {panels.map((p, i) => (
          <DecorPanel
            key={`${p.label}-${i}`}
            label={p.label}
            variant={p.variant}
            className={`h-40 w-full sm:h-full ${p.span ?? ''}`}
          />
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-herb">Prefer to just come see it in person?</p>
        <NavLink to="/contact" className="btn-primary mt-4 inline-flex">
          Order Takeout
        </NavLink>
      </div>
    </div>
  )
}
