import { Flame, UtensilsCrossed, CakeSlice } from 'lucide-react'
import DishCard from './DishCard'

const iconMap = {
  utensils: UtensilsCrossed,
  flame: Flame,
  cake: CakeSlice,
}

function MenuCategory({ category }) {
  const Icon = iconMap[category.icon] || UtensilsCrossed

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
          <Icon className="size-5" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900">
            {category.name}
          </h2>
          <p className="text-xs text-ink-500">{category.description}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {category.dishes.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  )
}

export default MenuCategory
