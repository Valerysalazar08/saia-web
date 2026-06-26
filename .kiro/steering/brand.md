# SAIA — Brand & Design Defaults

## Colores principales
- **Gradiente principal**: `linear-gradient(to right, #33BEDC, #2EEDAD)`
  - Azul cielo: `#33BEDC`
  - Verde claro: `#2EEDAD`
- **Fondo oscuro (hero/navbar dark)**: `#0A1628`
- **Fondo claro (secciones)**: `#f8fffe`
- **Texto principal**: `#0A1628`
- **Texto secundario**: `gray.500` / `gray.600`

## Tipografía
- **Fuente única**: `Work Sans` (Google Fonts)
- Pesos usados: 400, 500, 600, 700, 800
- Cargada en `index.html` via Google Fonts CDN

## Logo
- Texto: **SAIA** en bold/extrabold, color blanco sobre gradiente
- Ícono: candado con silueta de persona (SVG personalizado, componente `SaiaLogoIcon` en `Navbar.tsx`)
- Fondo del ícono: gradiente `#33BEDC → #2EEDAD`

## Navbar
- Fondo: gradiente `#33BEDC → #2EEDAD`
- Links: "Inicio", "Ayuda y Soporte ▾", "Idioma ▾"
- Botón primario: fondo blanco, texto `#2EEDAD`, `borderRadius="full"`
- Botón secundario: outline blanco, texto blanco, `borderRadius="full"`
- Posición: `fixed`, `zIndex={100}`

## Componentes reutilizables
- Botón primario: `bgGradient to-r`, `#33BEDC → #2EEDAD`, color blanco, `borderRadius="full"`
- Botón sobre gradiente: `bg="white"`, color `#2EEDAD`, `borderRadius="full"`
- Cards: `borderRadius="2xl"`, `border="1px solid rgba(51,190,220,0.12)"`, hover con `transform: translateY(-3px)`
- Texto con gradiente: `bgGradient="to-r"`, `gradientFrom="#33BEDC"`, `gradientTo="#2EEDAD"`, `bgClip="text"`

## Stack técnico
- React 19 + TypeScript
- Vite
- Chakra UI v3
- react-icons v5
- react-router-dom v7
- Fuente: Work Sans (Google Fonts)

## Estructura de archivos
- `src/components/` — componentes por sección
- `src/theme.ts` — sistema de tema Chakra UI con Work Sans y tokens de color
- `src/App.tsx` — composición de la landing page
