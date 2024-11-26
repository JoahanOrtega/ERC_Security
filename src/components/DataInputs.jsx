import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import { UsePrediction } from "../hooks/UsePrediction";

const InputField = ({ label, type = "text", name, value, onChange }) => (
  <Grid item xs={12} md={3}>
    <FormControl fullWidth>
      <TextField
        fullWidth
        label={label}
        variant="filled"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </FormControl>
  </Grid>
);

const SelectField = ({ label, options, name, onChange, value }) => (
  <Grid item xs={12} md={3}>
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        variant="filled"
        required
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);

function DataInputs() {
  const { formData, setFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { makePrediction } = UsePrediction();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Este campo es requerido";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Crear arreglo de features basadas en los datos del formulario
      const features = [
        parseFloat(formData.age),
        parseFloat(formData.bloodPressure),
        parseFloat(formData.specificGravity),
        parseFloat(formData.albumin),
        parseFloat(formData.sugar),
        formData.redBloodCells === "Anormal" ? 1 : 0,
        formData.epithelialCells === "Anormal" ? 1 : 0,
        parseFloat(formData.epithelialCellsCount),
        formData.bacteria === "Presente" ? 1 : 0,
        parseFloat(formData.bloodGlucose),
        parseFloat(formData.uricAcid),
        parseFloat(formData.serumCreatinine),
        parseFloat(formData.bloodSodium),
        parseFloat(formData.bloodPotassium),
        parseFloat(formData.hemoglobin),
        parseFloat(formData.hematocrit),
        parseFloat(formData.whiteBloodCellCount),
        parseFloat(formData.redBloodCellCount),
        formData.hypertension === "Si" ? 1 : 0,
        formData.diabetesMellitus === "Si" ? 1 : 0,
        formData.coronaryArteryDisease === "Si" ? 1 : 0,
        formData.appetite === "Bueno" ? 1 : 0,
        formData.edema === "Si" ? 1 : 0,
        formData.anemia === "Si" ? 1 : 0,
      ];

      const prediction = await makePrediction(features);
      navigate("/diagnosis", { state: { prediction } });
    } else {
      console.log("Error en el formulario");
    }
  };

  const handleReset = () => {
    setFormData({
      age: "",
      bloodPressure: "",
      specificGravity: "",
      albumin: "",
      sugar: "",
      redBloodCells: "",
      epithelialCells: "",
      epithelialCellsCount: "",
      bacteria: "",
      bloodGlucose: "",
      uricAcid: "",
      serumCreatinine: "",
      bloodSodium: "",
      bloodPotassium: "",
      hemoglobin: "",
      hematocrit: "",
      whiteBloodCellCount: "",
      redBloodCellCount: "",
      hypertension: "",
      diabetesMellitus: "",
      coronaryArteryDisease: "",
      appetite: "",
      edema: "",
      anemia: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <InputField
          label="Edad del paciente"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
        <InputField
          label="Presión Arterial (mm/Hg)"
          name="bloodPressure"
          type="number"
          value={formData.bloodPressure}
          onChange={handleChange}
        />
        <InputField
          label="Gravedad Específica sg (1.005,1.010,1.015,1.020,1.025)"
          name="specificGravity"
          type="number"
          value={formData.specificGravity}
          onChange={handleChange}
        />
        <InputField
          label="Albumina en orina (0-5)"
          name="albumin"
          type="number"
          value={formData.albumin}
          onChange={handleChange}
        />
        <InputField
          label="Azúcar en orina (0-5)"
          name="sugar"
          type="number"
          value={formData.sugar}
          onChange={handleChange}
        />
        <SelectField
          label="Presencia de glóbulos rojos en la orina"
          name="redBloodCells"
          options={[
            { value: "Normal", label: "Normal" },
            { value: "Anormal", label: "Anormal" },
          ]}
          value={formData.redBloodCells}
          onChange={handleChange}
        />
        <SelectField
          label="Presencia de células epiteliales en la orina"
          name="epithelialCells"
          options={[
            { value: "Normal", label: "Normal" },
            { value: "Anormal", label: "Anormal" },
          ]}
          value={formData.epithelialCells}
          onChange={handleChange}
        />
        <InputField
          label="Recuento de celulas epiteliales"
          name="epithelialCellsCount"
          type="number"
          value={formData.epithelialCellsCount}
          onChange={handleChange}
        />
        <SelectField
          label="Presencia de bacterias en la orina"
          name="bacteria"
          options={[
            { value: "Presente", label: "Presente" },
            { value: "Ausente", label: "Ausente" },
          ]}
          value={formData.bacteria}
          onChange={handleChange}
        />
        <InputField
          label="Glucosa en sangre (mgs/dl)"
          name="bloodGlucose"
          type="number"
          value={formData.bloodGlucose}
          onChange={handleChange}
        />
        <InputField
          label="Acido Urico en sangre (mgs/dl)"
          name="uricAcid"
          type="number"
          value={formData.uricAcid}
          onChange={handleChange}
        />
        <InputField
          label="Creatinina serica (mgs/dl)"
          name="serumCreatinine"
          type="number"
          value={formData.serumCreatinine}
          onChange={handleChange}
        />
        <InputField
          label="Sodio en sangre (mEq/L)"
          name="bloodSodium"
          type="number"
          value={formData.bloodSodium}
          onChange={handleChange}
        />
        <InputField
          label="Potasio en sangre (mEq/L)"
          name="bloodPotassium"
          type="number"
          value={formData.bloodPotassium}
          onChange={handleChange}
        />
        <InputField
          label="Hemoglobina (gms)"
          name="hemoglobin"
          type="number"
          value={formData.hemoglobin}
          onChange={handleChange}
        />
        <InputField
          label="Hematocrito"
          name="hematocrit"
          type="number"
          value={formData.hematocrit}
          onChange={handleChange}
        />
        <InputField
          label="Recuento de globulos blancos (cell/cumm)"
          name="whiteBloodCellCount"
          type="number"
          value={formData.whiteBloodCellCount}
          onChange={handleChange}
        />
        <InputField
          label="Recuento de globulos rojos (millions/cmm)"
          name="redBloodCellCount"
          type="number"
          value={formData.redBloodCellCount}
          onChange={handleChange}
        />
        <SelectField
          label="Hipertensión"
          name="hypertension"
          options={[
            { value: "Si", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          value={formData.hypertension}
          onChange={handleChange}
        />
        <SelectField
          label="Diabetes Mellitus (DM)"
          name="diabetesMellitus"
          options={[
            { value: "Si", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          value={formData.diabetesMellitus}
          onChange={handleChange}
        />
        <SelectField
          label="Enfermedad de la arteria coronaria (EAC)"
          name="coronaryArteryDisease"
          options={[
            { value: "Si", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          value={formData.coronaryArteryDisease}
          onChange={handleChange}
        />
        <SelectField
          label="Estado del apetito"
          name="appetite"
          options={[
            { value: "Bueno", label: "Bueno" },
            { value: "Malo", label: "Malo" },
          ]}
          value={formData.appetite}
          onChange={handleChange}
        />
        <SelectField
          label="Presencia de edema"
          name="edema"
          options={[
            { value: "Si", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          value={formData.edema}
          onChange={handleChange}
        />
        <SelectField
          label="Presencia de anemia"
          name="anemia"
          options={[
            { value: "Si", label: "Sí" },
            { value: "No", label: "No" },
          ]}
          value={formData.anemia}
          onChange={handleChange}
        />
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Diagnóstico
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleReset}>
            Eliminar todo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default DataInputs;
