import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DataScreen from './screens/DataScreen';
import DiagnosisScreen from './screens/DiagnosisScreen';
import { FormProvider } from './context/FormContext';

function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DataScreen />} />
          <Route path="/diagnosis" element={<DiagnosisScreen />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;