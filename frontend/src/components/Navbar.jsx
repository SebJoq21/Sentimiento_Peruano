import { useState } from 'react'
import { Menu, X, CalendarCheck } from 'lucide-react'
import config from '../data/config'
import { useReservation } from '../context/ReservationContext'
import SmartLink from './SmartLink'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { openReservation } = useReservation()
  const { restaurant, nav } = config

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-cream-50/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#inicio" className="flex items-baseline gap-1" onClick={closeMenu}>
          <span className="font-display text-xl font-bold text-brand-600 sm:text-2xl">
            {restaurant.logo.text}
          </span>
          <span className="font-display text-xl font-light text-ink-900 sm:text-2xl">
            {restaurant.logo.accent}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((link) => (
            <SmartLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-brand-600"
            >
              {link.label}
            </SmartLink>
          ))}
          <button
            type="button"
            onClick={openReservation}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 active:bg-brand-700"
          >
            <CalendarCheck className="size-4" />
            Reservar Mesa
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-900 transition hover:bg-cream-100 md:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-cream-200 bg-cream-50 px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((link) => (
              <SmartLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-700 transition hover:bg-cream-100 hover:text-brand-600"
              >
                {link.label}
              </SmartLink>
            ))}
            <button
              type="button"
              onClick={() => {
                closeMenu()
                openReservation()
              }}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
            >
              <CalendarCheck className="size-4" />
              Reservar Mesa
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
