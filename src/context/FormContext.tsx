import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
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

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
