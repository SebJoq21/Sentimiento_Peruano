# Sentimiento Peruano — Landing Page y Carta Digital

Esqueleto de sitio web (Website as a Service) para el restaurante de comida criolla peruana **Sentimiento Peruano**. Construido con **React + Vite**, **Tailwind CSS** y **React Router**.

## Requisitos previos

- **Node.js** v18 o superior (recomendado v22+)
- **npm** v9 o superior

## Instalación

```bash
npm install
```

Instala todas las dependencias del proyecto:

| Dependencia       | Uso                                            |
| ----------------- | ---------------------------------------------- |
| `react`           | Librería principal de interfaz                 |
| `react-dom`       | Renderizado de React en el DOM                 |
| `react-router-dom`| Rutas: `/` (landing) y `/carta` (carta digital)|
| `lucide-react`    | Íconos de la interfaz                          |
| `tailwindcss`     | Framework de estilos CSS                       |

## Levantar el proyecto

Ejecuta el servidor de desarrollo con HMR (Hot Module Replacement):

```bash
npm run dev
```

Luego abre la URL que muestra la consola (por defecto http://localhost:5173).

Rutas disponibles:

- `/` → Landing Page (hero, nosotros, teaser de la carta, reserva, footer)
- `/carta` → Carta digital con imágenes, categorías y botón flotante de reserva

## Scripts útiles

| Comando            | Descripción                                       |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Servidor de desarrollo con HMR                    |
| `npm run build`    | Genera la build de producción en `dist/`          |
| `npm run preview`  | Sirve localmente la build de producción           |
| `npm run lint`     | Analiza el código con Oxlint                      |

## Estructura del proyecto

```
src/
├── data/config.js                 → Toda la información del restaurante (datos editables)
├── context/ReservationContext.jsx → Estado del flujo de reserva (pendiente de conectar al backend)
├── pages/
│   ├── LandingPage.jsx            → Vista principal
│   └── MenuPage.jsx               → Carta digital
├── components/
│   ├── menu/                      → DishCard, MenuCategory
│   └── Navbar, Hero, About, MenuTeaser, ReservationCTA, Footer, ...
└── main.jsx / App.jsx             → Punto de entrada y rutas
```

## Personalización rápida

Todo el contenido del sitio (nombre, teléfono, dirección, platos, precios, imágenes, enlaces) se edita en **`src/data/config.js`**, sin tocar los componentes.

## Paleta de colores

Definida en `tailwind.config.js`:

- `brand` → rojo/terracota (ají panca)
- `cream` / `terra` → tonos tierra y crema para fondos
- `ink` → grises oscuros para el texto
