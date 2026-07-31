import { useEffect, useState } from 'react'
import { X, CircleCheckBig } from 'lucide-react'
import { useReservation } from '../context/ReservationContext'

const reservationConfig = {
  maxPeople: 8,
  timeSlots: [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
  ],
}

const countryCodes = [
  { value: '+51', label: '+51 Perú' },
  { value: '+54', label: '+54 Argentina' },
  { value: '+56', label: '+56 Chile' },
  { value: '+57', label: '+57 Colombia' },
  { value: '+34', label: '+34 España' },
  { value: '+1', label: '+1 EE.UU.' },
]

const initialForm = {
  dni: '',
  nombre: '',
  telefono: '',
  fecha: '',
  hora: '',
  personas: '2',
}

const today = new Date().toISOString().split('T')[0]

const inputClass =
  'w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-ink-900 placeholder:text-gray-400 transition focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500'

const labelClass =
  'mb-1.5 block text-xs font-semibold uppercase tracking-widest text-ink-500'

function ReservationModal() {
  const { isOpen, closeReservation } = useReservation()
  const [form, setForm] = useState(initialForm)
  const [countryCode, setCountryCode] = useState('+51')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setForm(initialForm)
      setCountryCode('+51')
      setIsSubmitted(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'dni') {
      const digits = value.replace(/\D/g, '')
      if (digits.length <= 8) {
        setForm((prev) => ({ ...prev, dni: digits }))
      }
      return
    }

    if (name === 'telefono') {
      const digits = value.replace(/\D/g, '')
      if (digits.length <= 9) {
        setForm((prev) => ({ ...prev, telefono: digits }))
      }
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...form, telefono: `${countryCode} ${form.telefono}` }
    console.log('[Reserva] Datos enviados al backend:', data)
    setIsSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Reservar mesa"
      onClick={closeReservation}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-soft sm:p-8"
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

        {isSubmitted ? (
          <div className="flex flex-col items-center px-2 py-10 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-green-100">
              <CircleCheckBig className="size-9 text-green-600" />
            </span>
            <h4 className="mt-5 font-display text-2xl font-bold text-ink-900">
              ¡Reserva solicitada!
            </h4>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
              Hemos registrado tu solicitud con tu DNI. Te enviaremos la
              confirmación por WhatsApp en breve.
            </p>
            <button
              type="button"
              onClick={closeReservation}
              className="mt-8 rounded-full bg-brand-600 px-8 py-3 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 active:scale-95"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="dni" className={labelClass}>
                  DNI
                </label>
                <input
                  id="dni"
                  name="dni"
                  type="tel"
                  required
                  inputMode="numeric"
                  placeholder="12345678"
                  value={form.dni}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="nombre" className={labelClass}>
                  Nombre Completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Juan Pérez"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="telefono" className={labelClass}>
                  WhatsApp / Celular
                </label>
                <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition focus-within:border-brand-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-brand-500">
                  <select
                    id="pais"
                    name="pais"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    aria-label="Código de país"
                    className="w-28 shrink-0 border-r border-gray-200 bg-gray-100 px-3 py-2.5 text-sm text-ink-900 focus:outline-none"
                  >
                    {countryCodes.map((code) => (
                      <option key={code.value} value={code.value}>
                        {code.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    inputMode="numeric"
                    placeholder="999 999 999"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-ink-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fecha" className={labelClass}>
                  Fecha
                </label>
                <input
                  id="fecha"
                  name="fecha"
                  type="date"
                  required
                  min={today}
                  value={form.fecha}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="hora" className={labelClass}>
                  Hora
                </label>
                <select
                  id="hora"
                  name="hora"
                  required
                  value={form.hora}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona una hora
                  </option>
                  {reservationConfig.timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="personas" className={labelClass}>
                  Personas
                </label>
                <select
                  id="personas"
                  name="personas"
                  required
                  value={form.personas}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {Array.from(
                    { length: reservationConfig.maxPeople },
                    (_, i) => i + 1,
                  ).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'persona' : 'personas'}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Para grupos de más de {reservationConfig.maxPeople} personas,
                  por favor contáctanos por WhatsApp.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-600 px-8 py-3.5 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 active:scale-[0.98]"
            >
              Confirmar Reserva
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default ReservationModal
