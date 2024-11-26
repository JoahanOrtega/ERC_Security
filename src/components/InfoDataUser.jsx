import * as React from "react";
import { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormContext } from "../context/FormContext";

export default function BasicTable() {
  const { formData } = useContext(FormContext);

  const rows = [
    {
      key1: "Edad",
      value1: formData.age,
      key2: "Presión Arterial",
      value2: formData.bloodPressure,
    },
    {
      key1: "Gravedad Específica",
      value1: formData.specificGravity,
      key2: "Albumina en orina",
      value2: formData.albumin,
    },
    {
      key1: "Azúcar en orina",
      value1: formData.sugar,
      key2: "Presencia de glóbulos rojos en la orina",
      value2: formData.redBloodCells,
    },
    {
      key1: "Presencia de células epiteliales en la orina",
      value1: formData.epithelialCells,
      key2: "Recuento de celulas epiteliales",
      value2: formData.epithelialCellsCount,
    },
    {
      key1: "Presencia de bacterias en la orina",
      value1: formData.bacteria,
      key2: "Glucosa en sangre",
      value2: formData.bloodGlucose,
    },
    {
      key1: "Acido Urico en sangre",
      value1: formData.uricAcid,
      key2: "Creatinina serica",
      value2: formData.serumCreatinine,
    },
    {
      key1: "Sodio en sangre",
      value1: formData.bloodSodium,
      key2: "Potasio en sangre",
      value2: formData.bloodPotassium,
    },
    {
      key1: "Hemoglobina",
      value1: formData.hemoglobin,
      key2: "Hematocrito",
      value2: formData.hematocrit,
    },
    {
      key1: "Recuento de globulos blancos",
      value1: formData.whiteBloodCellCount,
      key2: "Recuento de globulos rojos",
      value2: formData.redBloodCellCount,
    },
    {
      key1: "Hipertensión",
      value1: formData.hypertension,
      key2: "Diabetes Mellitus",
      value2: formData.diabetesMellitus,
    },
    {
      key1: "Enfermedad de la arteria coronaria",
      value1: formData.coronaryArteryDisease,
      key2: "Estado del apetito",
      value2: formData.appetite,
    },
    {
      key1: "Presencia de edema",
      value1: formData.edema,
      key2: "Presencia de anemia",
      value2: formData.anemia,
    },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{ boxShadow: 3, borderRadius: 2, marginTop: 2 }}
    >
      <Table aria-label="User data table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}
            >
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {row.key1}
              </TableCell>
              <TableCell>{row.value1}</TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                {row.key2}
              </TableCell>
              <TableCell>{row.value2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
