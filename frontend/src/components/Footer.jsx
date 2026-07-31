import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Camera,
  ThumbsUp,
  Music2,
  MessageCircle,
} from 'lucide-react'
import config from '../data/config'
import SmartLink from './SmartLink'

const socialIcons = {
  camera: Camera,
  thumbsUp: ThumbsUp,
  music2: Music2,
  messageCircle: MessageCircle,
}

function Footer() {
  const { restaurant, contact, nav, social } = config
  const year = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-ink-900 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            {restaurant.logo.text}{' '}
            <span className="font-light text-brand-300">{restaurant.logo.accent}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/70">
            {restaurant.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Navegación
          </h3>
          <ul className="mt-4 flex flex-col gap-2">
            {nav.map((link) => (
              <li key={link.href}>
                <SmartLink
                  href={link.href}
                  className="text-sm text-cream-100/70 transition hover:text-white"
                >
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-cream-100/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <a href={contact.mapLink} target="_blank" rel="noreferrer" className="hover:text-white">
                {contact.address}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand-300" />
              <a href={`tel:${contact.phone}`} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-brand-300" />
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-300">
            Horarios
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-cream-100/70">
            {contact.hours.map((slot) => (
              <li key={slot.days} className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-300" />
                <span>
                  <span className="block text-cream-100">{slot.days}</span>
                  <span>{slot.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-cream-100/50">
            © {year} {restaurant.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {social.map((item) => {
              const Icon = socialIcons[item.icon] || MessageCircle
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-cream-100 transition hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
