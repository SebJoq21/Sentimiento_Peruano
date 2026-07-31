import { ChefHat, HeartHandshake } from 'lucide-react'
import config from '../data/config'
import SectionHeading from './SectionHeading'

function About() {
  const { about } = config

  return (
    <section id="nosotros" className="bg-cream-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
          <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-terra-200/50" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="size-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker={about.kicker}
            title={about.title}
            align="left"
          />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-ink-500">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-cream-200 bg-white p-4 text-center shadow-card"
              >
                <p className="font-display text-2xl font-bold text-brand-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
              <HeartHandshake className="size-4" />
              Recetas familiares
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-terra-50 px-4 py-2 text-sm font-medium text-terra-700">
              <ChefHat className="size-4" />
              Cocina 100% artesanal
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
