# Maison Lumière: prototipo de tienda online

Prototipo visual y funcional de e-commerce para una marca de moda francesa (ficticia).
**Tecnologías: solo HTML semántico + Tailwind CSS.** Sin frameworks de JavaScript.

## Vistas

| Archivo | Vista | Contenido |
|---|---|---|
| `index.html` | Home | Navbar (logo, búsqueda, cuenta), hero, Nuevos lanzamientos, Más vendidos, footer |
| `catalogo.html` | Catálogo | Filtros por categoría y talla, rejilla 4×5 (20 productos) |
| `producto-*.html` (20 páginas) | Producto | Una página por producto (p. ej. `producto-camisa-de-lino-riviera.html`): 2 columnas (foto / info), talla, cantidad, "Agregar al carrito", materiales y uso recomendado |
| `carrito.html` | Carrito | 3 productos de ejemplo, subtotal, IVA, total y botón "Comprar" |
| `checkout.html` | Pago | 3 pasos: datos personales → dirección de entrega → pago con tarjeta |

La navbar y el footer son idénticos en todas las vistas, y todas las páginas están enlazadas entre sí.

## SEO
- Estructura semántica (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `address`) y un solo `h1` por página.
- `title`, `meta description`, `canonical`, Open Graph y `lang="es"` en cada vista.
- Datos estructurados Schema.org (JSON-LD): `ClothingStore`, `WebSite` + `SearchAction`, `BreadcrumbList`, `ItemList`, `Product` + `Offer`.
- `robots.txt` y `sitemap.xml`; carrito y checkout marcados como `noindex`.
- Imágenes con `alt`, `width`/`height` (evita saltos de layout) y `loading="lazy"`.

## Ver el proyecto en local

Son páginas HTML estáticas, así que basta con el servidor que ya trae Python (no hay que instalar nada):

```bash
python3 -m http.server 3000   # http://localhost:3000
```

También puedes usar el servidor de la plantilla [4GeeksAcademy/html-hello](https://github.com/4GeeksAcademy/html-hello), que necesita Flask:

```bash
pip3 install flask
python3 server.py   # http://localhost:3000
```

## Desarrollo

### ¿Por qué Tailwind compilado y no por CDN?

Tailwind se puede cargar de dos formas:

| | CDN (`<script src="https://cdn.tailwindcss.com">`) | Compilado (este proyecto) |
|---|---|---|
| Qué descarga el navegador | Un JavaScript que genera los estilos **en cada visita** | Un CSS ya generado y minificado |
| Clases incluidas | Todo Tailwind, se usen o no | Solo las clases que aparecen en los `.html` |
| Rendimiento | Más peso y trabajo en el navegador; baja la nota de PageSpeed | Ligero; **98 en PageSpeed (móvil)** |
| Primera carga | La página puede verse un instante sin estilos | Los estilos se aplican desde el principio |
| Uso recomendado | Solo para pruebas (Tailwind lo avisa en la consola) | Producción |

Como el cliente pide buen rendimiento y SEO, y el enunciado exige al menos 80 puntos en PageSpeed, se eligió **compilar Tailwind**.
Cada página carga el resultado como una hoja de estilos normal:

```html
<link rel="stylesheet" href="assets/css/styles.css">
```

**Cómo funciona:** `src/input.css` (estilos base) + `tailwind.config.js` (paleta y tipografías de la marca) → `npm run build` revisa los `.html` y genera `assets/css/styles.css` solo con las clases usadas.

> ⚠️ Si añades o cambias clases en el HTML, vuelve a compilar (`npm run build`) o deja `npm run dev` abierto mientras trabajas. Si no, las clases nuevas no tendrán estilo.

```bash
npm install
npm run dev     # recompila al guardar
npm run build   # CSS minificado para producción
```

Los estilos propios (botones, inputs, etc.) están en `src/input.css` y la paleta de la marca en `tailwind.config.js`.
**Haz commit siempre de `assets/css/styles.css`**: GitHub Pages sirve los archivos tal cual, sin ejecutar ningún build.

> Las imágenes son marcadores de posición de picsum.photos. Sustitúyelas por fotos reales del producto.

## Flujo de trabajo en equipo (Git)
1. `main` siempre estable; una rama por tarea: `feature/home`, `feature/catalogo`, `feature/producto`, `feature/carrito`, `feature/checkout`.
2. Commits pequeños y descriptivos (`feat(carrito): añade cuadro de totales`).
3. Pull Request hacia `main` revisada por la otra persona antes del merge.
4. Antes de abrir el PR: `git pull origin main` para resolver conflictos en local.

## Despliegue y PageSpeed
1. Settings → Pages → Deploy from branch → `main` / root.
2. Analiza la URL pública en https://pagespeed.web.dev/.
3. Guarda la captura como `pagespeed-result.png` en la raíz del repositorio.
