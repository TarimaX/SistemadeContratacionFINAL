import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Header from '../../components/Header';

const FormularioCaAmplio = () => {
  const [formData, setFormData] = useState({
    ca_nombre: '',
    ca_descripcion: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede enviar los datos a un servidor o realizar alguna acción.
    console.log(formData);
  };

  return (
    <div className="register">
    
    <Box 
        component="form"
        bgcolor={'rgba(255, 255, 255, 0.7)'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '16px',
        }}
        onSubmit={handleSubmit}
      >
        <Header title="Formulario Campo Amplio" subtitle="Complete el formulario" />

        <label>Campo Amplio:</label>
        <TextField
          name="ca_nombre"
          value={formData.ca_nombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Descripción:</label>
        <TextField
          name="ca_descripcion"
          value={formData.ca_descripcion}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2, p: 2}}>
          Enviar
        </Button>
      </Box>
    </div>
  );
};

export default FormularioCaAmplio;
