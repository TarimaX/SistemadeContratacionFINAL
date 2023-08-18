import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
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

function PopUpVerificacion() {
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
        Intentar otra vez
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          YA HA SELECCIONADO SU PROCESO DE POSTULACIÓN
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              padding: 0,
              marginRight: '-8px',
              marginTop: '-8px',
              marginLeft: 'auto',
            }}
          >
            <CloseIcon />
          </IconButton>
        </CustomDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            NO SE PERMITE REALIZAR OTRO PROCESO DE POSTULACIÓN AL MISMO USUARIO DURANTE EL MISMO CONCURSO DE MÉRITOS Y OPOSICIÓN
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            startIcon={<CloseIcon />}
          >
            Salir
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default PopUpVerificacion;
