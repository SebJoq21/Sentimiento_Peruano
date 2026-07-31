import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import MenuTeaser from '../components/MenuTeaser'
import ReservationCTA from '../components/ReservationCTA'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuTeaser />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
