import { CalendarCheck, UtensilsCrossed } from 'lucide-react'
import config from '../data/config'
import { useReservation } from '../context/ReservationContext'
import Button from './Button'
import SmartLink from './SmartLink'

function Hero() {
  const { hero, restaurant } = config
  const { openReservation } = useReservation()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream-100 pb-16 pt-28 sm:pt-32 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-terra-300/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            {hero.titleTop}{' '}
            <span className="text-brand-600">{hero.titleHighlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-ink-500 sm:text-lg lg:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <SmartLink
              href={hero.primaryCta.href}
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {hero.primaryCta.label}
                <UtensilsCrossed className="size-5" />
              </Button>
            </SmartLink>
            <button type="button" onClick={openReservation} className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {hero.secondaryCta.label}
                <CalendarCheck className="size-5" />
              </Button>
            </button>
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-ink-500/70">
            {restaurant.description}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-brand-500/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-card sm:-left-6">
            <p className="font-display text-xl font-bold text-brand-600">12+ años</p>
            <p className="text-xs text-ink-500">de tradición criolla</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
