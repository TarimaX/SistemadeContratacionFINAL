import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import TextField from "@mui/material/TextField";
import axios from "axios";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close'; // Icono de "x"

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

export default function ElegantPopUpRegistro() {
  const [open, setOpen] = React.useState(false);
  const [openCorreo, setOpenCorreo] = React.useState(false);
  const [openCorreoValido, setOpenCorreoValido] = React.useState(false);
  const [openCodigoInvalido, setOpenCodigoInvalido] = React.useState(false);
  const [openCorreoInvalido, setOpenCorreoInvalido] = React.useState(false);
  const [otp, setOTP] = React.useState("");
  const [otpInput, setOTPInput] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(false);
  const [correoEnviado, setCorreoEnviado] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCorreo = () => {
    setOpenCorreo(false);
    setOpen(true);
  };
  const handleCloseCorreoValido = () => {
    setOpenCorreoValido(false);
  };
  const handleCloseCodigoInvalido = () => {
    setOpenCodigoInvalido(false);
  };
  const handleCloseCorreoInvalido = () => {
    setOpenCorreoInvalido(false);
  };
  const handleSendOTP = () => {
    // Generar un número aleatorio como OTP
    const otp_val = Math.floor(Math.random() * 10000);
    setOTP(otp_val);
    axios
      .post("http://localhost:8800/send-email", {
        email: localStorage.getItem("email"),
        otp: otp_val,
        nombre:localStorage.getItem('nombre'),
        apellido: localStorage.getItem('apellido'),
        titulo:localStorage.getItem('titulo'),
        cedula:localStorage.getItem('cedula')
      })
      .then((response) => {
        setOpenCorreo(true);
      })
      .catch((error) => {
        console.error(error);
        setOpenCorreoInvalido(true);
      });
  };

  const handleVerifyOTP = () => {
    if (otpInput == otp) {
      setOpenCorreoValido(true);
      setCurrentPage("signin");
    } else {
      setOpenCodigoInvalido(true);
    }
  };
  const handleClickOpenAndSendOTP = () => {
    handleSendOTP();
  };
  const handleCloseAndVerifyOTP = () => {
    handleClose();
    handleVerifyOTP();
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpenAndSendOTP}
        style={{ backgroundColor: "#007b49", color: "white" }}
      >
        Aceptar
      </Button>
      <Dialog
        open={openCorreo}
        onClose={handleCloseCorreo}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move", display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="draggable-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
            <MailOutlineIcon fontSize="large" />
          </div>
          <div style={{ textAlign: 'center' }}>Se ha enviado un código de verificación a su correo electrónico.</div>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseCorreo}>
            <CloseIcon />
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openCorreoInvalido}
        onClose={handleCloseCorreoInvalido}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move", display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="draggable-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
            <ErrorOutlineIcon fontSize="large" />
          </div>
          <div style={{ textAlign: 'center' }}>Error al enviar código de verificación, por favor compruebe que su correo esté correcto.</div>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseCorreoInvalido}>
            <CloseIcon />
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Datos enviados correctamente
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese el codigo enviado a su correo
          </DialogContentText>
          <TextField
            id="filled-basic"
            label="Código"
            variant="filled"
            onChange={(e) => setOTPInput(e.target.value)}
            style={{ display: "flex", justifyContent: "center" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndVerifyOTP}>Validar</Button>
        </DialogActions>
  </Dialog>
  <Dialog
        open={openCorreoValido}
        onClose={handleCloseCorreoValido}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move", display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="draggable-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
            <CheckCircleOutlineOutlinedIcon fontSize="large" />
          </div>
          <div style={{ textAlign: 'center' }}>Correo verificado.</div>
        </DialogTitle>
          
        <DialogActions>
          <Button onClick={handleCloseCorreoValido}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openCodigoInvalido}
        onClose={handleCloseCodigoInvalido}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move", display: 'flex', flexDirection: 'column', alignItems: 'center' }} id="draggable-dialog-title">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
            <ErrorOutlineIcon fontSize="large" />
          </div>
          <div style={{ textAlign: 'center' }}>Código incorrecto.</div>
        </DialogTitle>
          
        <DialogActions>
          <Button onClick={handleCloseCodigoInvalido}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
