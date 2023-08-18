import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ElegantBootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2),
  },
}));

function ElegantBootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 3 }} {...other}>
      {children}
      {onClose && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: theme => theme.spacing(1),
            top: theme => theme.spacing(1),
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
}

ElegantBootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ElegantPopUpSeguro() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormControlLabel
        onClick={handleClickOpen}
        control={<Checkbox defaultChecked />}
        sx={{ color: "#1976D2" }}
        label="Acepto los términos y condiciones"
      />

      <ElegantBootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <ElegantBootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Confirmación de Registro
        </ElegantBootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          Gracias por registrarte para participar en el proceso de contratación docente 2023 de la Universidad de las Fuerzas Armadas (ESPE). 
          Queremos asegurarte que la privacidad y seguridad de tus datos personales son de suma importancia para nosotros.
          <br/>
          Tus datos serán tratados con el máximo cuidado y confidencialidad. 
          Entendemos la sensibilidad de la información que nos proporcionas y queremos garantizarte que estos datos serán utilizados únicamente 
          con el propósito específico para el cual fueron recopilados: el proceso de selección y contratación docente para el año 2023.
          <br/>
          En ningún caso compartiremos, venderemos ni divulgaremos tus datos personales a terceros sin tu consentimiento expreso. 
          Cumpliremos con todas las disposiciones legales y reglamentarias relacionadas con la protección de datos personales.
          <br/>
          Tu participación es fundamental para el éxito de nuestro proceso de contratación docente, y tu confianza en nosotros es valiosa. 
          Si tienes alguna pregunta o inquietud acerca del manejo de tus datos personales, no dudes en contactarnos a través de los canales 
          de soporte proporcionados en nuestro sitio web.
          <br/>
          Agradecemos tu compromiso con la ESPE y tu interés en formar parte de nuestro equipo docente. 
          Esperamos contar contigo en este importante proceso.{" "}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} startIcon={<CheckCircleIcon />}>
            Confirmar
          </Button>
        </DialogActions>
      </ElegantBootstrapDialog>
    </div>
  );
}
