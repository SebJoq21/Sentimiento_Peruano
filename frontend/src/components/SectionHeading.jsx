function SectionHeading({ kicker, title, subtitle, align = 'center', tone = 'dark' }) {
  const alignment =
    align === 'center' ? 'mx-auto text-center' : 'text-left'
  const kickerClass = `font-semibold uppercase tracking-widest text-xs ${
    tone === 'light' ? 'text-brand-200' : 'text-brand-600'
  }`
  const titleClass =
    tone === 'light' ? 'text-white' : 'text-ink-900'
  const subtitleClass =
    tone === 'light' ? 'text-brand-100' : 'text-ink-500'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {kicker && <p className={kickerClass}>{kicker}</p>}
      <h2 className={`mt-3 font-display text-3xl font-bold text-balance sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${subtitleClass}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
