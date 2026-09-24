# Contabilidad RS - Sitio Web Corporativo

Este proyecto es una aplicación web moderna y premium desarrollada para la firma **Rolando Sepúlveda Auditorías**, orientada a ofrecer servicios de contabilidad, tributación y asesoría laboral.

## Características del Proyecto
- **Diseño Premium**: Interfaz moderna con animaciones fluidas (fade-ins, glassmorphism).
- **Hero Dinámico**: Control de imágenes tipo slider automático.
- **Formulario Integrado con WhatsApp**: Las cotizaciones generan automáticamente mensajes preformateados hacia la API de WhatsApp, maximizando la conversión sin necesidad de backend.
- **Testimonios**: Sección de confianza para mostrar el impacto en clientes reales.
- **Responsive**: Se adapta perfectamente a todos los dispositivos (móviles, tablets, escritorio) incluyendo menú *off-canvas* para navegación celular.

## Tecnologías Utilizadas
- **React 18** (Librería principal)
- **Vite** (Empaquetador y entorno de desarrollo ultra rápido)
- **React Router DOM v6** (Navegación multi-página y hash-routing)
- **CSS3** (Estilizado sin frameworks pesados, uso extensivo de CSS Grid, Flexbox, y Variables CSS)
- **Iconify** (Íconos vectoriales escalables)

## Estructura del Código
- `/src/components/`: Componentes reutilizables como el Layout principal y la Barra de Navegación.
- `/src/pages/`: Vistas de las páginas principales (Home, Servicios, Contacto).
- `/src/assets/`: Imágenes locales (Hero, Acerca de, Logos).
- `/src/data.json`: Archivo de configuración central. Aquí puedes cambiar fácilmente textos, correos, redes sociales, estadísticas y servicios sin tocar el código fuente.

## Pasos para ejecutar este proyecto localmente

1. **Instalar Node.js**: Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).
2. **Abrir una terminal**: Navega hasta la carpeta del proyecto.
3. **Instalar dependencias**: Ejecuta el comando:
   ```bash
   npm install
   ```
4. **Levantar el servidor local**:
   ```bash
   npm run dev
   ```
   Esto abrirá un enlace local (usualmente `http://localhost:5173/`).
5. **Construir para producción (Subir a Vercel/Host)**:
   ```bash
   npm run build
   ```
   Esto generará la carpeta `dist/` con el sitio web optimizado, listo para ser desplegado.
