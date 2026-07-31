import { X } from 'lucide-react'
import config from '../data/config'
import { useReservation } from '../context/ReservationContext'

function ReservationModal() {
  const { isOpen, closeReservation } = useReservation()

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Reservar mesa"
      onClick={closeReservation}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-ink-900">
            Reservar mesa
          </h3>
          <button
            type="button"
            onClick={closeReservation}
            aria-label="Cerrar"
            className="rounded-full p-2 text-ink-500 transition hover:bg-cream-100 hover:text-ink-900"
          >
            <X className="size-5" />
          </button>
        </div>
        <p className="mt-3 text-sm text-ink-500">
          El formulario de reserva estará disponible pronto en {config.restaurant.name}.
          Por ahora, puedes llamarnos al {config.contact.phone}.
        </p>
      </div>
    </div>
  )
}

export default ReservationModal
