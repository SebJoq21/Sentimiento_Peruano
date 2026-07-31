import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const html = document.documentElement
    const previous = html.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    html.style.scrollBehavior = previous
  }, [pathname])

  return null
}

export default ScrollToTop
