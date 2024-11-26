import React from 'react';
import { Typography } from '@mui/material';
import DataInputs from '../components/DataInputs';
import '../styles/styles.css';

function DataScreen() {
  return (
    <>
      <div className="innerContainer">
        <Typography variant="h4" gutterBottom className='title'>
          Diagnóstico de enfermedades renales
        </Typography>
        <DataInputs />
      </div>
    </>
  );
}

export default DataScreen;