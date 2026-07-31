const config = {
  restaurant: {
    name: 'Sentimiento Peruano',
    shortName: 'Sentimiento',
    tagline: 'El auténtico sabor del Perú en tu mesa',
    logo: {
      text: 'Sentimiento',
      accent: 'Peruano',
    },
    description:
      'Cocina criolla de verdad, hecha con ají panca, cariño y las recetas de siempre.',
  },

  contact: {
    phone: '+51 999 999 999',
    whatsapp: '+51999999999',
    email: 'hola@sentimientoperuano.pe',
    address: 'Av. La Marina 2500, San Miguel, Lima',
    mapLink: 'https://maps.google.com',
    hours: [
      { days: 'Lunes a Jueves', time: '12:00 p.m. – 10:00 p.m.' },
      { days: 'Viernes y Sábado', time: '12:00 p.m. – 11:00 p.m.' },
      { days: 'Domingo', time: '12:00 p.m. – 9:00 p.m.' },
    ],
  },

  social: [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'camera' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'thumbsUp' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: 'music2' },
    { name: 'WhatsApp', url: 'https://wa.me/51999999999', icon: 'messageCircle' },
  ],

  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Carta', href: '/carta' },
    { label: 'Contacto', href: '#contacto' },
  ],

  hero: {
    badge: 'Cocina criolla · Desde 2012',
    titleTop: 'El auténtico sabor del Perú',
    titleHighlight: 'en tu mesa',
    subtitle:
      'Ají de gallina, lomo saltado y ceviche fresco, preparados con recetas familiares que cruzan generaciones. Bienvenido a casa.',
    primaryCta: { label: 'Ver Carta', href: '/carta' },
    secondaryCta: { label: 'Reservar Mesa', href: '#reserva' },
    image: {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Ambiente acogedor del restaurante Sentimiento Peruano',
    },
  },

  about: {
    kicker: 'Nuestra historia',
    title: 'Más de 12 años llevando el Perú a la mesa',
    paragraphs: [
      'Sentimiento Peruano nació en 2012 en una cocina familiar de San Miguel, con una olla de tamales y la receta secreta de ají de gallina de la abuela Rosa. Lo que empezó como un comedor de barrio hoy es el lugar favorito de los que buscan el sabor criollo de verdad, sin atajos.',
      'Cada plato se cocina a mano, con productos frescos del mercado y el ají panca como protagonista. Creemos que la comida peruana es un sentimiento: el que despierta cuando el aroma de un lomo saltado te trae de vuelta a casa.',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      alt: 'Interior acogedor del restaurante Sentimiento Peruano',
    },
    stats: [
      { value: '12+', label: 'Años de tradición' },
      { value: '40+', label: 'Platos criollos' },
      { value: '25k', label: 'Clientes felices' },
    ],
  },

  menu: {
    kicker: 'Nuestra carta',
    title: 'Platos que saben a Perú',
    subtitle:
      'Cada plato se prepara al momento, con productos frescos del mercado y el ají panca como protagonista.',
    banner: {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
      alt: 'Ambiente cálido del restaurante Sentimiento Peruano',
    },
    categories: [
      {
        id: 'entradas',
        name: 'Entradas',
        icon: 'utensils',
        description: 'Para abrir el apetito',
        dishes: [
          {
            name: 'Causa Limeña',
            description: 'Papa amarilla, ají amarillo y pollo deshilachado.',
            price: 'S/ 24',
            image:
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
            alt: 'Causa limeña colorida en un plato',
          },
          {
            name: 'Ceviche Clásico',
            description: 'Pescado fresco, leche de tigre y canchita serrana.',
            price: 'S/ 32',
            image:
              'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80',
            alt: 'Ceviche de pescado fresco',
          },
          {
            name: 'Papa a la Huancaína',
            description: 'Papas sancochadas con crema de ají y queso.',
            price: 'S/ 18',
            image:
              'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
            alt: 'Papa a la huancaína con crema de ají',
          },
        ],
      },
      {
        id: 'platos-de-fondo',
        name: 'Platos de Fondo',
        icon: 'flame',
        description: 'El corazón de la cocina criolla',
        dishes: [
          {
            name: 'Lomo Saltado',
            description: 'Tiritas de lomo, cebolla y tomate con papas fritas.',
            price: 'S/ 38',
            image:
              'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            alt: 'Lomo saltado con papas fritas',
          },
          {
            name: 'Ají de Gallina',
            description: 'Pollo deshilachado en crema de ají amarillo y nueces.',
            price: 'S/ 30',
            image:
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
            alt: 'Ají de gallina cremoso',
          },
          {
            name: 'Cau Cau',
            description: 'Mondongo suave con papas, cúrcuma y hierbabuena.',
            price: 'S/ 27',
            image:
              'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
            alt: 'Cau cau peruano servido en bowl',
          },
        ],
      },
      {
        id: 'postres',
        name: 'Postres',
        icon: 'cake',
        description: 'El final dulce perfecto',
        dishes: [
          {
            name: 'Suspiro a la Limeña',
            description: 'Crema de leche con manjar blanco y merengue.',
            price: 'S/ 16',
            image:
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
            alt: 'Suspiro a la limeña con merengue',
          },
          {
            name: 'Picarones',
            description: 'Rosquitas de zapallo con miel de chancaca.',
            price: 'S/ 14',
            image:
              'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80',
            alt: 'Picarones dorados con miel',
          },
          {
            name: 'Arroz con Leche',
            description: 'Cremoso, con canela y clavo de olor.',
            price: 'S/ 12',
            image:
              'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
            alt: 'Arroz con leche cremoso',
          },
        ],
      },
    ],
    teaser: {
      kicker: 'Explora la carta',
      title: 'Descubre nuestros sabores',
      subtitle:
        'Entradas, platos de fondo y postres que saben a Perú. Míralos con imágenes y encuentra tu favorito.',
      cta: {
        label: 'Ver Carta Completa',
        href: '/carta',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
        alt: 'Ceviche fresco servido al momento',
      },
    },
    stickyCta: {
      label: 'Reservar Mesa',
    },
  },

  reservation: {
    kicker: 'Reserva tu mesa',
    title: 'Una mesa criolla te está esperando',
    subtitle:
      'Los fines de semana se llenan rápido. Reserva ahora y te guardamos el mejor rincón del restaurante.',
    cta: {
      label: 'Reservar Mesa',
      href: '#reserva',
    },
    note: 'Sin costo · Confirmación inmediata',
  },
}

export default config
