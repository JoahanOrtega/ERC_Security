import React from "react";
import { Typography, Box } from "@mui/material";
import InfoDataUser from "../components/InfoDataUser";
import "../styles/styles.css";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";

function DiagnosisScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { prediction } = location.state || {}; // Obtiene el estado

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      {prediction === 1 ? (
        <Box
          sx={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            padding: 2,
            borderRadius: 2,
            border: "1px solid #f5c6cb",
            width: "100%",
            marginTop: 2,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            Los signos y síntomas detectados sugieren la presencia de Enfermedad
            Renal Crónica (ERC). Es urgente que consulte con un especialista
            para recibir un diagnóstico y tratamiento adecuado lo antes posible.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#cce5ff",
            color: "#004085",
            padding: 2,
            borderRadius: 2,
            border: "1px solid #b8daff",
            width: "100%",
            marginTop: 2,
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6">
            Los signos y síntomas no indican la presencia de Enfermedad Renal
            Crónica (ERC). Sin embargo, es recomendable continuar con chequeos
            periódicos y llevar un estilo de vida saludable para prevenir
            futuros problemas renales.
          </Typography>
        </Box>
      )}
      <InfoDataUser />
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 3, alignSelf: "center" }}
        onClick={() => navigate("/")}
      >
        Regresar
      </Button>
    </Box>
  );
}

export default DiagnosisScreen;
