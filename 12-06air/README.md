# BA Consciente 2026: Dashboard Ambiental de Buenos Aires

Este proyecto es una plataforma de concientización sobre el estado del medio ambiente en la Ciudad Autónoma de Buenos Aires, proyectado al año 2026. El objetivo es brindar información clara y accesible sobre los desafíos ecológicos locales utilizando principios de **Diseño Web Sostenible**.

## 🚀 Proceso de Desarrollo

El proyecto siguió un ciclo de vida de ingeniería de software profesional:

### 1. Investigación y Datos
Se realizó una investigación exhaustiva sobre los indicadores ambientales actuales y proyectados para Buenos Aires, centrándose en:
- **Calidad del Aire:** Identificando que el 96% de los contaminantes provienen del transporte.
- **Gestión de Residuos:** Analizando las 7,500 toneladas diarias generadas y el impacto de plásticos en las costas.
- **Saneamiento:** Documentando el hito del "Sistema Riachuelo" y sus 4.5 millones de beneficiarios.
- **Cambio Climático:** Registrando las proyecciones de olas de calor superiores a 40°C.

### 2. Diseño Web Sostenible (Low-Impact)
La interfaz fue diseñada bajo la filosofía de reducir la huella de carbono digital:
- **Modo Oscuro por Defecto:** Para ahorrar energía en pantallas OLED.
- **Gráficos Livianos:** Uso de CSS puro y SVGs en lugar de imágenes pesadas.
- **Rendimiento:** Optimización de carga para minimizar la transferencia de datos.

### 3. Implementación Dual
El proyecto se entrega en dos versiones para demostrar flexibilidad tecnológica:

#### **A. Versión React (Frontend Moderno)**
Localizada en `/ba-consciente-2026`
- **Tecnologías:** React 18, TypeScript, Vite.
- **Estilo:** Vanilla CSS (sin frameworks pesados).
- **Interactividad:** Estado dinámico para el AQI y componentes reactivos.

#### **B. Versión Flask (Backend Python)**
Localizada en `/ba-consciente-flask`
- **Tecnologías:** Python 3.x, Flask.
- **Arquitectura:** Servidor basado en rutas y plantillas Jinja2.
- **Compatibilidad:** Ajustado específicamente para funcionar en entornos Python modernos (3.14+).

---

## 🛠️ Cómo Ejecutar los Proyectos

### Para la versión Flask:
1. `cd ba-consciente-flask`
2. `python -m venv venv`
3. Activar entorno: `.\venv\Scripts\activate` (Windows)
4. `pip install flask markupsafe`
5. `python app.py`

### Para la versión React:
1. `cd ba-consciente-2026`
2. `npm install`
3. `npm run dev`

---

## 📂 Estructura del Repositorio
- `ba-consciente-2026/`: Código fuente de la aplicación React.
- `ba-consciente-flask/`: Código fuente de la aplicación Flask.
- `.gitignore`: Configuración para mantener el repo libre de archivos basura.
- `README.md`: Este archivo informativo.

---
**Desarrollado para:** Proyecto de Concientización Ambiental - Junio 2026.
