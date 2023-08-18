import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Header from '../../components/Header';

const FormulariOferta = () => {
  const [formData, setFormData] = useState({
    post_periodo: '',
    connombre: '',
    cenombre: '',
    canombre: '',
    sedenombre: '',
    deptnombre: '',
    panombre: '',
    actnombre: '',
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
        <Header title="Formulario Oferta" subtitle="Complete el formulario" />
        <label>Periodo Postulación:</label>
        <TextField
          name="post_periodo"
          value={formData.post_periodo}
          onChange={handleChange}
          type="number"
          margin="normal"
          required
        />
        <label>Tipo de Contratación:</label>
        <TextField
          name="connombre"
          value={formData.connombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Campo Específico:</label>
        <TextField
          name="cenombre"
          value={formData.cenombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Campo Amplio:</label>
        <TextField
          name="canombre"
          value={formData.canombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Sede:</label>
        <TextField
          name="sedenombre"
          value={formData.sedenombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Departamento:</label>
        <TextField
          name="deptnombre"
          value={formData.deptnombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Personal Académico:</label>
        <TextField
          name="panombre"
          value={formData.panombre}
          onChange={handleChange}
          margin="normal"
          required
        />
        <label>Actividad:</label>
        <TextField
          name="actnombre"
          value={formData.actnombre}
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

export default FormulariOferta;
