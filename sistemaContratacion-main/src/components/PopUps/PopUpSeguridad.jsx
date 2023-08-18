import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .MuiTypography-root': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

function PopUpSeguridad() {
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
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ley de Privacidad
        </CustomDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Estimado usuario,
          <br />
          <br />
            Gracias por postularse para docente en nuestra universidad. Para poder procesar su solicitud, necesitamos recopilar y almacenar algunos de sus datos personales, como su nombre, identificación y hoja de vida.
          <br />
            Queremos asegurarle que sus datos personales serán tratados con la máxima confidencialidad y solo se utilizarán para los fines previstos. Además, cumplimos con todas las leyes y regulaciones aplicables en materia de protección de datos.
          <br />
            Si tiene alguna pregunta o inquietud sobre cómo se manejarán sus datos personales, no dude en ponerse en contacto con nosotros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            startIcon={<CheckIcon />}
          >
            Aceptar
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            startIcon={<CloseIcon />}
          >
            Rechazar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default PopUpSeguridad;
