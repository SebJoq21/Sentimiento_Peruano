import { createContext, useCallback, useContext, useState } from 'react'

const ReservationContext = createContext(null)

export function ReservationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openReservation = useCallback(() => {
    console.log('[Reserva] Abriendo flujo de reserva — pendiente de conectar al backend')
    setIsOpen(true)
  }, [])

  const closeReservation = useCallback(() => setIsOpen(false), [])

  return (
    <ReservationContext.Provider
      value={{ isOpen, openReservation, closeReservation }}
    >
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const ctx = useContext(ReservationContext)
  if (!ctx) throw new Error('useReservation debe usarse dentro de ReservationProvider')
  return ctx
}
