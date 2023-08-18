import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icono de check

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

export default function ElegantPopUpPostulacion() {
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
                  <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Tipo de Personal</TableCell>
                  <TableCell >Personal académico que desarrolla actividades de tercer nivel de grado y cuarto nivel</TableCell>
                </TableRow>
                <TableRow sx={{ textAlign: 'left', width: '100%' }}>
                  <TableCell sx={{ fontWeight: 'bold', textAlign: 'left' }}>Tipo de Contratación</TableCell>
                  <TableCell >TÉCNICO DE INVESTIGACIÓN NIVEL 1</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} startIcon={<CheckCircleIcon />}>Validar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
