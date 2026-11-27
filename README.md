# Maison Lumière: prototipo de tienda online

Prototipo visual y funcional de e-commerce para una marca de moda francesa (ficticia).
**Tecnologías: solo HTML semántico + Tailwind CSS.** Sin frameworks de JavaScript.

## Vistas

| Archivo | Vista | Contenido |
|---|---|---|
| `index.html` | Home | Navbar (logo, búsqueda, cuenta), hero, Nuevos lanzamientos, Más vendidos, footer |
| `catalogo.html` | Catálogo | Filtros por categoría y talla, rejilla 4×5 (20 productos) |
| `producto.html` | Producto | 2 columnas (foto / info), talla, cantidad, "Agregar al carrito", materiales y uso recomendado |
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

El proyecto usa el servidor de la plantilla [4GeeksAcademy/html-hello](https://github.com/4GeeksAcademy/html-hello):

```bash
pip3 install flask
python3 server.py   # http://localhost:3000
```

## Desarrollo

Tailwind se compila a un CSS estático (`assets/css/styles.css`) para obtener mejor puntuación en PageSpeed que con el CDN.

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
