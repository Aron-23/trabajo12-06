# BA Consciente 2026 (Versión Flask)

Esta es una aplicación web sencilla desarrollada con **Python y Flask** para concientizar sobre el estado del medio ambiente en la Ciudad de Buenos Aires para el año 2026.

## Características
- **Monitoreo de AQI:** Simulador de Calidad del Aire en tiempo real para CABA.
- **Datos Clave:** Información actualizada sobre gestión de residuos, contaminación por transporte, saneamiento del Riachuelo y olas de calor.
- **Diseño Sostenible:** Interfaz en modo oscuro diseñada para bajo consumo energético.

## Instalación y Uso Local

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd ba-consciente-flask
   ```

2. **Crear y activar entorno virtual:**
   ```bash
   python -m venv venv
   # En Windows:
   .\venv\Scripts\activate
   # En Linux/Mac:
   source venv/bin/activate
   ```

3. **Instalar dependencias:**
   ```bash
   pip install flask
   # Nota: Si usas Python 3.14+ y markupsafe da error, usa:
   pip install markupsafe --no-binary markupsafe
   ```

4. **Ejecutar la aplicación:**
   ```bash
   python app.py
   ```
   La web estará disponible en `http://127.0.0.1:5000`.

## Contribuciones
Este es un proyecto educativo de monitoreo ciudadano. ¡Toda ayuda es bienvenida!
