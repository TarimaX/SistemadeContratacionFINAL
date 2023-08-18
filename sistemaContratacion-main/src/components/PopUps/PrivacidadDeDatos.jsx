import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function PrivacidadDeDatos({ open, handleClose, handleAccept }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: "#E0DDDD", // Color de fondo más oscuro
          maxWidth: "500px", // Tamaño horizontal fijo
          maxHeight: "500px", // Tamaño vertical fijo
          padding: "20px", // Espaciado interno
        },
      }}
    >
      <DialogTitle style={{ color: "#292727", textAlign: "center" }}>Ley y Privacidad de Datos</DialogTitle>
      <DialogContent dividers>
        <DialogContentText style={{ color: "#5C5C5C" }}>
          <div style={{ textAlign: "justify" }}>
            En cumplimiento con la Ley Orgánica
            de Privacidad de Datos, queremos informarte que los datos personales
            proporcionados en el proceso de postulación para la contratación de
            docentes serán tratados con la máxima confidencialidad y con el único
            propósito de evaluar tu idoneidad para el puesto solicitado. Estos
            datos serán utilizados exclusivamente por el comité de selección y
            administración pertinentes.
            <br />
            <br />
            Tu privacidad es de suma importancia para nosotros, y nos
            comprometemos a adoptar todas las medidas necesarias para garantizar
            la seguridad y protección de tus datos personales. Tus datos no serán
            compartidos con terceros sin tu consentimiento expreso.
            <br />
            <br />
            Al participar en este proceso de postulación, aceptas que tus datos
            personales sean recopilados y tratados de acuerdo con los términos
            establecidos en la Ley Orgánica de Privacidad de Datos. Si en algún
            momento deseas ejercer tus derechos de acceso, rectificación,
            cancelación u oposición de tus datos personales, puedes ponerte en
            contacto con nuestro equipo de administración.
            <br />
            <br />
            Agradecemos tu interés en unirte a nuestra comunidad académica y
            confiamos en que este proceso se llevará a cabo de manera transparente
            y conforme a las leyes de privacidad de datos vigentes.
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button onClick={handleClose} style={{ color: "#f44336" }}>
          Rechazar
        </Button>
        <Button onClick={handleAccept} style={{ color: "#4caf50" }} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PrivacidadDeDatos;
