from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    # Datos ambientales de Buenos Aires 2026
    stats = [
        {
            "title": "Gestión de Residuos",
            "stat": "7.500 Tn",
            "desc": "De basura generada por día en la ciudad. El 78% de los residuos en nuestras playas es plástico.",
            "type": "primary"
        },
        {
            "title": "Calidad del Aire",
            "stat": "96%",
            "desc": "De los contaminantes del aire provienen de las emisiones del transporte automotor.",
            "type": "warning"
        },
        {
            "title": "Saneamiento",
            "stat": "4.5M",
            "desc": "Personas beneficiadas por la finalización del Sistema Riachuelo, el mayor hito en décadas.",
            "type": "accent"
        },
        {
            "title": "Crisis Climática",
            "stat": "+40°C",
            "desc": "Temperaturas máximas alcanzadas en el verano de 2026, agravadas por el efecto isla de calor.",
            "type": "warning"
        }
    ]
    
    # AQI inicial simulado
    aqi = 102
    
    return render_template('index.html', stats=stats, aqi=aqi)

if __name__ == '__main__':
    app.run(debug=True)
