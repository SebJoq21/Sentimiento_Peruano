import { CalendarCheck } from 'lucide-react'
import config from '../data/config'
import { useReservation } from '../context/ReservationContext'
import Button from './Button'

function ReservationCTA() {
  const { reservation } = config
  const { openReservation } = useReservation()

  return (
    <section id="reserva" className="bg-brand-700 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-200">
          {reservation.kicker}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-balance text-white sm:text-4xl">
          {reservation.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 sm:text-lg">
          {reservation.subtitle}
        </p>
        <div className="mt-8">
          <Button
            variant="cream"
            size="lg"
            onClick={openReservation}
            className="text-brand-700 hover:bg-white"
          >
            <CalendarCheck className="size-5" />
            {reservation.cta.label}
          </Button>
        </div>
        <p className="mt-4 text-sm text-brand-200">{reservation.note}</p>
      </div>
    </section>
  )
}

export default ReservationCTA
