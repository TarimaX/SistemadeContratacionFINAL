import React from "react";
import Box from "@mui/material/Box";
import Header from "../../components/Header";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TableComponent } from "../../administrador/adminSideBar/src/components/TableComponent";

const dataFormacion = [
  {
    requisito:
      "Tener al menos grado académico de maestría reconocido y registrado por el órgano Rector de la Política Pública de Educación Superior, en el campo amplio de conocimiento vinculado a sus actividades de investigación, docencia o vinculación con la sociedad. La Universidad dará preferencia a los perfiles que tengan adicionalmente el título de grado con afinidad al campo amplio del conocimiento de su formación de cuarto nivel.",
    titulos: [
      "Maestria",
      "Doctorado, Phd",
      "Adicional título grado,de y/o Maestría Doctorado, PhD o su equivalente",
    ],
    detalleTiempo: [
      "Registrado SENESCYT",
      "Registrado SENESCYT",
      "Registrado SENESCYT",
    ],
    minimo: [18, 0, 0],
    maximo: [20, 3, 1.5],
    observaciones: [
      "Se atribuyen únicamente 2 puntos cuando el título/s de maestría tiene afinidad con el título/s de grado a nivel de campo especifico",
      "Se atribuyen 3 puntos cuando eltítulo de doctorado tiene afinidad con el de maestría y el de grado,según se especifique en la convocatoria.",
      "Se atribuye 0.5 por cada titulo de grado, maestria y/o doctorado adicional, hasta el måximo puntaje indicado.",
    ],
  },
  {
    requisito:
      "Acreditar competencia con mve equivalente en una lengua diferente al castellano; o haber obtenido su titulo académico de tercer o cuart nivel en un pais con una lengua diferente al castellano. Los idiomas ancestrales serån considerados como lengua diferente al castellano. Cuando el idioma materno del postulante sea diferente al castellano",
    titulos: [
      "Certificado nivel B1 o su equivalente",
      "Titulo de tercer o nivel cuarto obtenido en Otro idioma",
      "Certificado  de idiomas ancestrales",
    ],
    detalleTiempo: [
      "Documento o certificado emitido por una IES o una instituciön que brinda programas o cursos de lenguas, cuyo certificado de suficiencia sea  mediante la rendiciön de exåmenes reconocimiento intemacional.",
    ],
    minimo: [3],
    maximo: [3.5],
    observaciones: [
      "Se alribuye 0,25 punto adicional por registrar un certificado superior a nivel Bl. Se atribuye 0.25 punto adicional por la acreditaciön de Otro idioma adicional al primero que ha Sido presentado, siempre que se el certificado  presente equivalente a C2",
    ],
  },
  {
    requisito:
      "Acreditar un minimo de ciento veintiocho (128) horas de capacitacidn en los ültimos 4 anos en el campo de conocimiento inculado a sus  actividades de docencia, investigaciön y/o vinculaciön con la sociedad, de las  cuales al menos el 25% (32 horas)  deberån  sobre  temas  versar  pedagögicos.",
    titulos: ["Capacilaciön en        los üllimos 4        anos, 128 horas"],
    detalleTiempo: [
      "96 horas de capacitaciön  el campo de  en  conocimiento vinculado a  actividades de  sus  investigaciön  docencia,  y/o vinculaciön con la  sociedad",
      "32 horas sobre temas pedagögicos",
    ],
    minimo: [2, 2.5],
    maximo: [1.75, 2],
    observaciones: [
      "puntaje   Para asignar el   realizarå   adicional,   se   proporcionalmente al nümero de   horas e capacitaciån, hasta 64   horas adicionales a las minimas   requeridas, si suma mås se   pondrå el puntaje måximo   indicadoa",
      "Para asignar un puntaje adicional, se deberå realizar proporcionalmente al nümero de horas de apacitaciönt hasta 32  horas adicionales a las minimas requeridas, si suma mås se pondrå el måximo puntaje indicado.",
    ],
  },
];

const dataDocencia = [
  {
    requisito:
      "Tener promedio minimo de ochenta por ciento (80%) como resultado de su evaluaciön de desempefio en los procesos de valuaciön de desempefio correspondientes al ültimo ano en el que ejerciö la docencia.",
    titulos: [
      "Evaluactön Integra de desempefio docente de los üllimos 24 meses",
    ],
    detalleTiempo: ["Minimo 80 % en el ültimo año"],
    minimo: [2.75],
    maximo: [3],
    observaciones: [
      "El postulante que tenga e  puntaje minimo de 80 1100 en su  evaluaciön obtendrå el puntaje  minimo.  El puntaje dicional se asignarå  de manera proporcional a partirl  de los 80 puntos. hasta ell  puntaie måximo indicado.",
    ],
  },
  {
    requisito:
      "Acreditar al menos veinte y cuatro (24)      meses de experiencia profesional      docente en educacién superior. Se      reconocerå como  profesional docente a la labor como personal de apoyo académico.",
    titulos: ["Experiencia      profesional      docencia      universitaria"],
    detalleTiempo: ["24 meses"],
    minimo: [4],
    maximo: [4.5],
    observaciones: [
      "El puntaje adiciona , se astgnara proporcionalmente de acuerdo al de de meses nümero experiencia, hasta 8 meses, si suma mås se pondrå el måximo puntaje indicado.",
    ],
  },
];
const dataProd = [
  {
    requisito:
      "Haber publicado al menos dos articulos en revistas indexadas o haber producido la cantidad equivalente de obras de elevancia, segün la tabla de equivalencias de Obras de relevancia del Reglamento de Carrera y Escalafon del Personal Académico de la Universidad de las Fuerzas Armadas - ESPE. La participaciån en la roducciön de los articulos u Otras obras de relevancia deberå ser como utor seguin Io establecido en la encionada tabla de equivalencias. rån vålidos los articulos u Otras Obras de relevancia que tengan finidad con la formaciön académica el docente nvestigador y, con las ctividades de docencia, investigaciön vinculaciön que realizarå en la niversidad de las uerzas Armadas ESPE. Serån vålidas las publicaciones obras de relevancia producidas en os ültimos (4) cuatro ahos.",
    titulos: [
      "Articulo completo o DOI",
      "Obras relevancia",
      "Solicitud de al Servicio Nacional Derechos e Intelectuales",
    ],
    detalleTiempo: [
      "2 articulos, obras de relevancia dentro de los ültimos cuatro anos",
    ],
    minimo: [5.5],
    maximo: [6.5],
    observaciones: [
      "Por cada articulo adicional al requisito minimo exigido se sumarå 025 puntos, hasta el måximo puntaje indicado",
    ],
  },
];

export const ProduccionComponent = () => {
  return <div>Contenido de Producción académica</div>;
};

export const ExperienciaComponent = () => {
  return <div>Contenido de Experiencia Laboral</div>;
};

const steps = [
  "Formación",
  "Docencia",
  "Producción académica",
  "Experiencia profesional",
];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <TableComponent data={dataFormacion} />;
    case 1:
      return <TableComponent data={dataDocencia} />;
    case 2:
      return <TableComponent data={dataProd} />;
    case 3:
      return <ExperienciaComponent />;
    default:
      throw new Error("Unknown step");
  }
}

export const Calificaciones = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Header
            title="Calificaciones"
            subtitle="Calificaciones de los postulantes"
          />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Calificación
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Gracias por Calificar.
              </Typography>
              <Typography variant="subtitle1">
                Su calificación ha sido registrada.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Atrás
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Confirmar Calificación"
                    : "Siguiente"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
};
