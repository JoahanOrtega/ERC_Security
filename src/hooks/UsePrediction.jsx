import React from "react";

export const UsePrediction = () => {
  const makePrediction = async (features) => {
    const data = { features };

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const predictionData = await response.json();
      return predictionData.prediction; // Retorna el resultado de la predicción
    } catch (error) {
      console.error("Error al obtener la predicción:", error);
      return null; // Manejo de error
    }
  };

  return {
    makePrediction,
  };
};
