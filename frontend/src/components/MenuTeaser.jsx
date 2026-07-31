import { useState } from 'react'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import config from '../data/config'
import SmartLink from './SmartLink'

function MenuTeaser() {
  const { menu } = config
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-lg md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-terra-600">
              {menu.teaser.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance text-ink-900 sm:text-4xl">
              {menu.teaser.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
              {menu.teaser.subtitle}
            </p>
            <div className="mt-8">
              <SmartLink
                href={menu.teaser.cta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-4 text-base font-bold text-white shadow-card transition hover:bg-brand-600 active:scale-95"
              >
                <UtensilsCrossed className="size-5" />
                {menu.teaser.cta.label}
                <ArrowRight className="size-5" />
              </SmartLink>
            </div>
          </div>

          <div className="relative min-h-72 md:min-h-full">
            {!imageFailed ? (
              <img
                src={menu.teaser.image.src}
                alt={menu.teaser.image.alt}
                onError={() => setImageFailed(true)}
                className="absolute inset-0 size-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-100 to-cream-200 text-brand-700">
                <UtensilsCrossed className="size-14" />
                <span className="px-8 text-center text-sm uppercase tracking-widest text-brand-700/70">
                  Platos que saben a Perú
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuTeaser
