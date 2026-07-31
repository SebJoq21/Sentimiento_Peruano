import { useLayoutEffect } from 'react'
import { ArrowLeft, CalendarCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import config from '../data/config'
import { useReservation } from '../context/ReservationContext'
import MenuCategory from '../components/menu/MenuCategory'

function MenuPage() {
  const { restaurant, menu } = config
  const { openReservation } = useReservation()

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [])

  return (
    <div className="min-h-screen bg-cream-50 pb-20">
      <header className="relative overflow-hidden">
        <img
          src={menu.banner.src}
          alt={menu.banner.alt}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-cream-50" />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-ink-900 shadow-card backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
            {menu.kicker} · {restaurant.name}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-balance text-white drop-shadow sm:text-5xl">
            {menu.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-cream-100">
            {menu.subtitle}
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        {menu.categories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </main>

      <button
        type="button"
        onClick={openReservation}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-2xl transition hover:bg-brand-700 active:scale-95 md:bottom-10 md:right-10 md:px-7 md:py-3.5"
      >
        <CalendarCheck className="size-5" />
        {menu.stickyCta.label}
      </button>
    </div>
  )
}

export default MenuPage
