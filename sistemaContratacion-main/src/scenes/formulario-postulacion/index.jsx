import React from 'react';
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "../../components/Header";
import { grey } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';

import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, AppBar, Toolbar, Typography, TableHead } from '@mui/material';

import { pedirPostulaciones } from "../../api/postulacion";
import { useState } from "react";
import { useEffect } from "react";
import { pedirContratacion } from "../../api/contratacionTipo";
import { pedirPersonalAcademico } from "../../api/personalAcademico";
import { pedirCampoEspecifico } from "../../api/campoEspecifico";
import { pedirCampoAmplio } from "../../api/campoAmplio";
import { pedirSede } from "../../api/sede";
import { pedirDepartamento } from "../../api/departamento";
import { pedirActividad } from "../../api/actividad";

const formSchema = yup.object().shape({
  postulation: yup.string().required("Campo requerido"),
  contratacion: yup.string().required("Campo requerido"),
  personalAcademico: yup.string().required("Campo requerido"),
  textoVacio: yup.string().required("Campo requerido"),
});

const initialValues = {
  postulation: "",
  contratacion: "",
  personalAcademico: "",
  textoVacio: "",
};

const FormularioPostulacion = () => {
  const [postulacion,setPostulacion] = useState([])
  const [contratacion,setContratacion] = useState([])
  const [personalAcademico,setPersonalAcademico] = useState([])
  const [campoEspecifico,setCampoEspecifico] = useState([])
  const [campoAmplio,setCampoAmplio] = useState([])
  const [departamento,setDepartamento] = useState([])
  const [sede,setSede] = useState([])
  const [actividad,setActividad] = useState([])
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const arregloDeDatos = [
    { nombre: "Juan", edad: 30, correo: "juan@example.com" },
    { nombre: "María", edad: 25, correo: "maria@example.com" },
    { nombre: "Carlos", edad: 40, correo: "carlos@example.com" },
    { nombre: "Ana", edad: 28, correo: "ana@example.com" },
  ];
  const [seleccionados, setSeleccionados] = useState({
    postulation: "",
    contratacion: "",
    personalAcademico: "",
    campoEspecifico: "",
    campoAmplio: "",
    departamento: "",
    sede: "",
    actividad: "",
  });

  const formatDataForTable = (data) => {
    // Aquí puedes realizar cualquier formato necesario según la estructura del arreglo
    // Por ejemplo, si el arreglo es un arreglo de objetos con las propiedades 'nombre', 'edad' y 'correo'
    // Puedes devolver un arreglo de arreglos con las filas de la tabla
    return data.map((item) => [item.nombre, item.edad, item.correo]);
  };


  // Función para manejar el clic en el botón "Enviar"
  const handleEnviarClick = (values) => {
    // Obtener los valores seleccionados del objeto 'values'
    const {
      postulation,
      contratacion,
      personalAcademico,
      campoEspecifico,
      campoAmplio,
      departamento,
      sede,
      actividad,
    } = values;

    // Guardar los valores seleccionados en el estado 'seleccionados'
    setSeleccionados({
      postulation,
      contratacion,
      personalAcademico,
      campoEspecifico,
      campoAmplio,
      departamento,
      sede,
      actividad,
    });
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const PopUpPostulacion = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Confirmar
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Verifique los datos solo puede postular una vez por concurso, verifique los datos antes de enviar.
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <TableContainer component={Paper}>
                <Table sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Postulación</TableCell>
                    <TableCell >202351</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Tipo de Contratación</TableCell>
                    <TableCell >Personal académico que desarrolla actividades de tercer nivel de grado y cuarto nivel</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Campo Específico</TableCell>
                    <TableCell >Base de Datos</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Campo Amplio</TableCell>
                    <TableCell >seleccionados.postulacion</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Sede</TableCell>
                    <TableCell >Matriz</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Tipo de Departamento</TableCell>
                    <TableCell >Departamento de Ciencias Exactas</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Tipo de Personal Académico</TableCell>
                    <TableCell >Auxiliar Nivel 1</TableCell>
                  </TableRow>
                  <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                    <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Actividad</TableCell>
                    <TableCell >Docencia</TableCell>
                  </TableRow>

                </Table>
              </TableContainer>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Validar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  useEffect(() => {
    const PedirPosutlacion = async () => {
      try {
        const res = await pedirPostulaciones();
        const res1 = await pedirContratacion();
        const res2 =await pedirPersonalAcademico();
        const res3 = await pedirCampoEspecifico();
        const res4 = await pedirCampoAmplio();
        const res5 = await pedirSede();
        const res6 = await pedirDepartamento();
        const res7 = await pedirActividad();
        setPostulacion(res.data);
        setContratacion(res1.data);
        setPersonalAcademico(res2.data);
        setCampoEspecifico(res3.data);
        setCampoAmplio(res4.data);
        setSede(res5.data);
        setDepartamento(res6.data);
        setActividad(res7.data);
      } catch (error) {
        console.log(error);
      }
    };
    PedirPosutlacion();
  }, []);

  const [postulacion1Selected, setPostulacion1Selected] = useState(false); 
  const [postulacion2Selected, setPostulacion2Selected] = useState(false);
  const [postulacion3Selected, setPostulacion3Selected] = useState(false);
  const [postulacion4Selected, setPostulacion4Selected] = useState(false);
  const [postulacion5Selected, setPostulacion5Selected] = useState(false);
  const [postulacion6Selected, setPostulacion6Selected] = useState(false);
  const [postulacion7Selected, setPostulacion7Selected] = useState(false);
  return (
    <Box m="5vh" pt="0vh">
      <Header title="Formato de Documentos" subtitle="Complete el formulario" />

      <Formik
         onSubmit={(values) => {
          // Al hacer clic en Enviar, llamamos a handleEnviarClick para guardar los valores seleccionados
          handleEnviarClick(values);

          // Luego, llamamos a handleFormSubmit para procesar el formulario si es necesario
          handleFormSubmit(values);
        }}
        initialValues={initialValues}
        validationSchema={formSchema}>
            {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="20px">
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Postulación:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.postulation}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion1Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="postulation"
                  error={!!touched.postulation && !!errors.postulation}
                >
                  {postulacion.length > 0 ? (
                    postulacion.map((option) => (
                      <MenuItem key={option.post_id} value={option.post_periodo}>
                        {option.post_periodo}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Tipo de Contratación:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.contratacion}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion2Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="contratacion"
                  error={!!touched.contratacion && !!errors.contratacion}
                  disabled={!postulacion1Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {contratacion.length > 0 ? (
                    contratacion.map((option) => (
                      <MenuItem key={option.con_id} value={option.con_nombre}>
                        {option.con_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Campo Específico:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.campoEspecifico}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion3Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="personalAcademico"
                  error={
                    !!touched.campoEspecifico && !!errors.campoEspecifico
                  }
                  disabled={!postulacion2Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {campoEspecifico.length > 0 ? (
                    campoEspecifico.map((option) => (
                      <MenuItem key={option.ce_id} value={option.ce_nombre}>
                        {option.ce_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando campo estpecífico...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Campo Amplio:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.campoAmplio}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion4Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="campoAmplio"
                  error={
                    !!touched.campoAmplio && !!errors.campoAmplio
                  }
                  disabled={!postulacion3Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {campoAmplio.length > 0 ? (
                    campoAmplio.map((option) => (
                      <MenuItem key={option.ca_id} value={option.ca_nombre}>
                        {option.ca_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Sede:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.sede}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion5Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="sede"
                  error={
                    !!touched.sede && !!errors.sede
                  }
                  disabled={!postulacion4Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {sede.length > 0 ? (
                    sede.map((option) => (
                      <MenuItem key={option.sede_id} value={option.sede_nombre}>
                        {option.sede_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Departamento:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.departamento}
                  onChange={(event) => {
                    handleChange(event); // Default handleChange function to update the selected value
                    setPostulacion6Selected(true); // Set the variable to true when the MenuItem 1 is selected
                  }}
                  onBlur={handleBlur}
                  name="departamento"
                  error={
                    !!touched.departamento && !!errors.departamento
                  }
                  disabled={!postulacion5Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {departamento.length > 0 ? (
                    departamento.map((option) => (
                      <MenuItem key={option.dept_id} value={option.dept_nombre}>
                        {option.dept_nombre +" - "+ option.dept_descripcion}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Tipo de Personal Académico:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.personalAcademico}
                  onChange={(event) => {
                    handleChange(event);
                    setPostulacion7Selected(true); 
                  }}
                  onBlur={handleBlur}
                  name="personalAcademico"
                  error={
                    !!touched.personalAcademico && !!errors.personalAcademico
                  }
                  disabled={!postulacion6Selected} 
                >
                  {personalAcademico.length > 0 ? (
                    personalAcademico.map((option) => (
                      <MenuItem key={option.pa_id} value={option.pa_nombre}>
                        {option.pa_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando postulaciones...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  Seleccionar Actividad:
                </Typography>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.actividad}
                  onChange={(event) => {
                    handleChange(event); 
                  }}
                  onBlur={handleBlur}
                  name="actividad"
                  error={
                    !!touched.actividad && !!errors.actividad
                  }
                  disabled={!postulacion7Selected} // Disable the MenuItem until MenuItem 1 is selected
                >
                  {actividad.length > 0 ? (
                    actividad.map((option) => (
                      <MenuItem key={option.act_id} value={option.act_nombre}>
                        {option.act_nombre}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>Cargando actividades...</MenuItem>
                  )}
                </Select>
              </Box>
              <Box display="flex" justify-content="space-between" gap>
                {/* <Card sx={{ maxWidth: 220 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        justify-content="center"
                      >
                        Vacantes
                      </Typography>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        defaultValue="Vacantes"
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 220 }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Tiempo
                      </Typography>
                      <TextField
                        disabled
                        id="outlined-disabled"
                        defaultValue="Tiempo"
                      />
                    </CardContent>
                  </CardActionArea>
                </Card> */}
              </Box>

              <Box display="flex" justify-content="space-between" gap>
                <Card sx={{ maxWidth: 220, backgroundColor: grey[300]}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Actividad Docencia
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 220, backgroundColor: grey[300] }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Actividad Investigación
                      </Typography>
  
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ maxWidth: 220, backgroundColor: grey[300] }}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" >
                        Actividad Vinculación
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>

              {/* Include the PopUpPostulacion component here */}
              <PopUpPostulacion />
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre</TableCell>
                      <TableCell>Edad</TableCell>
                      <TableCell>Correo</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {/* Utiliza el bucle map para mostrar los datos del arreglo en la tabla */}
                    {formatDataForTable(arregloDeDatos).map((row, index) => (
                      <TableRow key={index}>
                        {row.map((cell, cellIndex) => (
                          <TableCell key={cellIndex}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default FormularioPostulacion;
