import { Routes, Route } from 'react-router-dom'
import { ReservationProvider } from './context/ReservationContext'
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import ReservationModal from './components/ReservationModal'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <ReservationProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/carta" element={<MenuPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <ReservationModal />
    </ReservationProvider>
  )
}

export default App
