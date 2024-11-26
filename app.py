from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

modelo = joblib.load('arbol_decision_entrenado.pkl')

app = Flask(__name__)


# Habilitar CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Ruta para hacer predicciones
@app.route('/predict', methods=['POST'])
def predict():
    datos = request.get_json() 
    paciente = np.array(datos['features']).reshape(1, -1)
    prediccion = modelo.predict(paciente)
    return jsonify({'prediction': int(prediccion[0])})

if __name__ == '__main__':
    app.run(debug=True)
