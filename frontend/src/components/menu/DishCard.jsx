function DishCard({ dish }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.alt || dish.name}
          loading="lazy"
          className="size-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-brand-600 shadow-card">
          {dish.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-display text-lg font-bold text-ink-900">{dish.name}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
          {dish.description}
        </p>
      </div>
    </article>
  )
}

export default DishCard
