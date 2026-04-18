# Design System — Obra MVP

Single source of truth for design decisions, tokens, and component patterns.

---

## 1. North Star

**"Herramienta de confianza para profesionales que no tienen tiempo que perder."**

El público objetivo son contratistas, instaladores y pequeños constructores. Son personas escépticas ante el software nuevo, que trabajan desde el móvil en obra, y que valoran la claridad y la rapidez por encima de cualquier sofisticación visual. No buscan un diseño "bonito" — buscan que funcione y que transmita que sabe lo que hace.

El diseño no aspira a ser editorial ni de lujo. Aspira a ser **preciso, legible y confiable**. Cada decisión visual debe justificarse con una de estas tres palabras.

**Implicaciones directas:**
- Jerarquía tipográfica clara: el usuario siempre sabe dónde está y qué tiene que hacer.
- Colour use is functional: el color ámbar señala acción, el navy señala estructura, el gris señala información secundaria.
- Espaciado generoso: los contratistas trabajan bajo presión y en móvil. Las interfaces densas producen errores y abandono.
- Sin decoración vacía: no hay gradientes, ilustraciones ni animaciones que no respondan a una necesidad funcional.

---

## 2. Paleta de Color

### Colores base

| Nombre | Hex | Uso |
|--------|-----|-----|
| **Navy (primario)** | `#1B2D4F` | Estructura — titulares, nav, texto principal, fondos oscuros |
| **Amber (acción)** | `#E8882A` | Acción y énfasis — CTA principal, badges numerados, acentos de borde, highlights |
| **Off-white (canvas)** | `#F8F6F1` | Fondo de secciones claras |
| **Warm grey (sección)** | `#F0EDE8` | Fondo de sección de formulario (más contraste que off-white) |
| **White** | `#FFFFFF` | Tarjetas, inputs, formulario |
| **Texto principal** | `#111827` | Cuerpo, valores, datos |
| **Texto secundario** | `#6B7280` | Subtítulos, ayuda, descripciones |
| **Texto terciario** | `#9CA3AF` | Placeholders, etiquetas desactivadas, notas pequeñas |

### Colores de estado

| Estado | Texto | Fondo |
|--------|-------|-------|
| Error | `#DC2626` | `#FEF2F2` |
| Éxito | `#16A34A` | `#F0FDF4` |
| Info/ayuda | `#2563EB` | `#EFF6FF` |

### Uso del color ámbar

El ámbar no es exclusivamente para el CTA. Es el color de **énfasis activo** en toda la interfaz:
- CTA principal (fondo sólido `#E8882A`)
- Badges de sección numerados (fondo sólido)
- Bordes de cards en estado activo o seleccionado
- Barra superior de la tarjeta de formulario
- Top border de las tarjetas de segmento en home
- Acentos decorativos muy sutiles (opacidad 8–25%)

**Regla:** El ámbar siempre indica importancia o acción. Nunca se usa para color de fondo de secciones extensas ni para texto corrido.

### Fondo oscuro (Hero, TopBar, Home)

El hero y la home usan `#111827` (dark slate) como fondo. Sobre él:
- Texto blanco puro para títulos
- Blanco al 50–75% para texto secundario
- Amber sin modificar para badges y spans de énfasis

---

## 3. Tipografía

### Familias

| Rol | Familia | Fallback |
|-----|---------|---------|
| **Display / titulares / labels de formulario** | Plus Jakarta Sans | sans-serif |
| **Cuerpo / texto de ayuda / placeholders** | Inter | sans-serif |

En Tailwind: `font-display` = Plus Jakarta Sans, `font-sans` / `font-body` = Inter.

### Escala

| Elemento | Tamaño | Peso | Familia |
|----------|--------|------|---------|
| Hero H1 | `clamp(2.25rem, 5vw, 3.5rem)` | 800 | Display |
| Section H2 | `clamp(1.5rem, 3vw, 2rem)` | 700–800 | Display |
| Card title / Form H3 | `1rem–1.125rem` | 700 | Display |
| Form section label | `0.875rem` (14px) | 600 | Display |
| Input label | `0.875rem` (14px) | 600 | Display |
| Body / instrucciones | `0.875rem` (14px) | 400 | Body |
| Hint / ayuda / notas | `0.75rem` (12px) | 400 | Body |
| Badge / eyebrow | `0.6875rem` (11px) | 600 | Display |
| Placeholder | `0.875rem` (14px) | 400 | Body |

### Reglas tipográficas

- **Jerarquía por peso, no solo por tamaño.** Un label de sección a 14px/600 se lee como más importante que un párrafo a 16px/400.
- **Line-height:** Titulares `1.1–1.15`, cuerpo `1.6`, ayuda `1.5`.
- **Letter-spacing:** Titulares grandes: `-0.02em`. Eyebrows/badges: `+0.08–0.12em` uppercase.
- **No más de dos familias** en ninguna pantalla.

---

## 4. Espaciado y Layout

### Sistema base

Grid de 8px. Todos los valores de padding, gap y margin deben ser múltiplos de 4 u 8.

| Token | Valor | Uso típico |
|-------|-------|------------|
| `spacing-1` | 4px | Gap mínimo entre elementos inline |
| `spacing-2` | 8px | Padding interno de badges |
| `spacing-3` | 12px | Gap entre label e input |
| `spacing-4` | 16px | Padding interno de cards pequeñas |
| `spacing-5` | 20px | Gap entre campos de formulario |
| `spacing-6` | 24px | Padding de cards medianas |
| `spacing-8` | 32px | Separación entre secciones dentro de una tarjeta |
| `spacing-10–12` | 40–48px | Padding vertical de secciones de página |
| `spacing-16–24` | 64–96px | Separación entre secciones de landing |

### Ancho máximo por contexto

| Contexto | Max-width |
|----------|-----------|
| Formulario principal | `max-w-2xl` (672px) |
| Contenido editorial (hero, FAQ) | `max-w-3xl` (768px) o `max-w-[1100px]` |
| Texto de ayuda / subheadline | `max-w-[560px]` |

### Mobile-first

El 80%+ de los contratistas acceden desde móvil en obra. Las decisiones de diseño parten del móvil y escalan a desktop, no al revés.

- Layouts de una sola columna por defecto
- Touch targets mínimos: 44px de altura en cualquier elemento interactivo
- Sin hover-only states como única fuente de información
- Formularios: inputs full-width, gap generoso entre campos

---

## 5. Superficies y Elevación

### Jerarquía de superficies

| Capa | Color | Uso |
|------|-------|-----|
| Página (body) | `#F8F6F1` o `#F0EDE8` | Fondo de sección |
| Card elevada | `#FFFFFF` | Formulario, tarjetas de contenido |
| Sub-surface | `#F9FAFB` | Fondo de steps internos, alt rows |
| Highlight | `rgba(232,136,42,0.06)` | Box de confirmación, item seleccionado |

### Sombras

Sombras suaves, difusas, nunca oscuras:
- **Card de formulario principal:** `shadow-xl shadow-[#1B2D4F]/10` + `ring-1 ring-[#1B2D4F]/08`
- **Cards de segmento (home):** `0 4px 24px rgba(0,0,0,0.25)`
- **Stat cards (hero):** `0 8px 32px rgba(0,0,0,0.35)`
- **CTA button:** `shadow-md shadow-[#E8882A]/25`

### Bordes

- **Form inputs:** `border border-[#1B2D4F]/12` → focus: `border-[#E8882A]`
- **Cards de segmento activo:** `border-top: 2px solid #E8882A`
- **Ghost borders:** `ring-1 ring-[#1B2D4F]/08`
- Los bordes 1px están permitidos como separadores de contenido (horizontal rules sutiles). Se usan con opacidad baja (`#1B2D4F` al 8–12%).

---

## 6. Border Radius

| Elemento | Radio |
|----------|-------|
| Tarjeta principal / formulario | `rounded-2xl` (16px) |
| Inputs, botones, pills | `rounded-lg` (8px) |
| Tarjetas de sección | `rounded-xl` (12px) |
| Badges de texto / status | `rounded-full` |
| Separadores internos | `rounded-full` (para puntos decorativos) |

---

## 7. Componentes de Formulario

El formulario de presupuesto es el componente más crítico de la web. Cada decisión visual debe reducir la fricción y aumentar la confianza.

### Estructura de secciones

El formulario se divide en **3 bloques numerados**, cada uno con:
- Badge circular ámbar (`w-8 h-8 bg-[#E8882A]`) con número blanco en Display 700
- Título de sección en Display 700 navy, 14–16px
- Subtítulo descriptivo en Body 400 grey, 12px

Separador entre bloques: línea con punto ámbar central (`border-t border-[#1B2D4F]/08` con ornamento ámbar).

### Inputs

```
Estado normal:   bg-white | border border-[#1B2D4F]/12 | rounded-lg | px-4 py-3.5
Estado focus:    border-[#E8882A] | ring-2 ring-[#E8882A]/15
Estado error:    border-red-400 | ring-2 ring-red-400/15
Placeholder:     text-[#9CA3AF] | Inter 400
```

- Labels: Display 600, `text-[#1B2D4F]`, 14px. Siempre visibles (no floating labels).
- Campos requeridos marcados con punto ámbar `*` (no texto "requerido").
- Notas de ayuda bajo el campo: Body 400, 12px, `text-[#9CA3AF]`.

### Selector de urgencia (cards)

3 tarjetas en grid. Estado inactivo: `bg-[#F9FAFB] border-2 border-[#1B2D4F]/10`. Estado activo: `border-[#E8882A] bg-[#E8882A]/06` + checkmark circular ámbar en esquina superior derecha.

### Filas de materiales

Cada fila tiene un badge numérico gris (`w-5 h-5 rounded-full bg-[#1B2D4F]/08`). Botón de eliminar: icono ×, visible siempre, `text-[#9CA3AF]` → hover `text-red-400`.

### Zona de subida de archivo

Drop zone con `border-2 border-dashed border-[#1B2D4F]/12`. Hover: `border-[#E8882A]/40`. Con archivo: card verde-ámbar con nombre truncado y botón de quitar.

### Box de proceso (pre-CTA)

```
bg-[#E8882A]/06 | border border-[#E8882A]/20 | rounded-xl | px-4 py-3.5
```

Icono check ámbar + texto que confirma que habrá una revisión humana. Este elemento reduce la incertidumbre del comprador justo antes del momento de mayor fricción.

### CTA principal

```
bg-[#E8882A] | text-white | font-display font-extrabold text-lg
rounded-xl | py-4 | w-full
shadow-md shadow-[#E8882A]/25
hover:brightness-110 | active:scale-[0.99]
```

El texto del botón describe el resultado, no la acción: **"Pedir mis presupuestos →"**, no "Enviar".

---

## 8. Iconos

- Estilo: Heroicons outline, `strokeWidth={2}` o `strokeWidth={1.75}` para iconos grandes.
- Tamaño base: `w-4 h-4` (16px) para inline, `w-5 h-5` (20px) para sección, `w-6 h-6` (24px) para hero/cards.
- Color: heredado del elemento padre salvo decorativos explícitos. En contexto ámbar: `text-[#E8882A]`. En dark: `text-white`.
- Sin iconos de relleno (filled) excepto en badges de estado (éxito, error).

---

## 9. Señales de Confianza

El público objetivo es escéptico. Las señales de confianza deben ser **específicas y honestas**, no genéricas.

### Qué funciona
- Números concretos: "0 llamadas necesarias", "0€ para el comprador"
- Describir el proceso post-envío con detalle (quita la ansiedad del "¿qué pasa después?")
- Indicar explícitamente que hay un humano revisando la lista antes de contactar distribuidores
- Mencionar Málaga de forma específica (no "toda España")

### Qué no funciona
- Badges genéricos de seguridad sin contexto
- Testimonios sin nombre, empresa o foto
- Promesas vagas ("rápido", "fácil")
- Sobrecargar la página con señales de confianza (contraproducente)

### Posicionamiento en la página
- Trust strip (3 pills) justo antes del CTA: "Sin registro · Respuesta el mismo día · 0€"
- Box de confirmación del proceso: dentro del formulario, antes del botón
- Nota geográfica: junto al email field del formulario

---

## 10. Interacción y Movimiento

Animaciones solo cuando comunican estado o guían atención. Sin movimiento decorativo.

| Patrón | Implementación |
|--------|---------------|
| Acordeón (FAQ, how it works) | `grid-rows-[0fr]` → `grid-rows-[1fr]`, `duration-300 ease-in-out` |
| Hover en tarjetas | `hover:scale-[1.01–1.02]`, `duration-200` |
| Hover en botones | `hover:brightness-110`, `active:scale-[0.99]` |
| Transición de color/borde | `transition-all duration-200` o `transition-colors` |
| Focus de inputs | Ring ámbar con transición, sin salto visual |

---

## 11. Secciones de Landing — Orden y Propósito

| Sección | Componente | Propósito |
|---------|-----------|-----------|
| 1. TopBar | `TopBar` | Navegación mínima + back to home |
| 2. Hero | `Hero` | Propuesta de valor + stats + CTA scroll |
| 3. Formulario | Section + `Materials` + `QuoteForm` | Conversión principal |
| 4. Dudas del proceso | `ProcessFAQ` | Eliminar fricción post-form |
| 5. Ejemplo de resultado | `ExampleResult` | Prueba de valor, visualizar el output |
| 6. FAQ general | `FAQ` | Objeciones restantes |
| 7. CTA final | `FinalCTA` | Segunda oportunidad de conversión |
| 8. Footer | `Footer` | Cierre |

---

## 12. Accesibilidad Mínima

- Contraste texto/fondo: mínimo 4.5:1 para texto normal, 3:1 para texto grande.
- Focus visible en todos los elementos interactivos (no suprimir outline sin alternativa).
- Labels explícitas en todos los inputs (`<label>` vinculado, no placeholder como único label).
- Botones descriptivos (`aria-label` en botones de icono).
- Imágenes decorativas: `alt=""` o `aria-hidden="true"`.
- Touch targets: mínimo 44×44px en móvil.

---

## 13. Lo que NO hacer

- **No** usar amber como color de fondo de secciones extensas ni para texto largo.
- **No** usar sombras oscuras o intensas (`shadow-black`, `drop-shadow` agresivos).
- **No** usar más de 2 familias tipográficas.
- **No** usar animaciones de entrada (fade-in al scroll) — añaden latencia percibida y complejidad sin valor en este contexto.
- **No** usar modales o overlays para contenido que cabe en la página.
- **No** usar gradientes salvo en los fondos de tarjetas del hero (ya definidos).
- **No** usar iconos de estilos mixtos (outline + filled + colored mezclados).
- **No** usar texto "Enviar" como CTA — siempre describir el resultado.
- **No** centrar texto de formulario — los labels y ayuda van alineados a la izquierda.
