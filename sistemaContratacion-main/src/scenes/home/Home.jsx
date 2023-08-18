import * as React from 'react';
import { useState } from "react";
import { 
  Button, 
  Typography, 
  Box } from "@mui/material";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Link } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import Navbar from './Navbar';
import PopUpSeguridad from '../../components/PopUps/PopUpSeguridad';

export default function Home() {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const boxStyle = {
    display: 'inline-flex',
    flexDirection:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
  };

  const linkStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#000',
  };

  return (
    <>
    <PopUpSeguridad open={open} onClose={handleClose} />
    <Navbar/>
      <div className="authPage">
        <Box alignContent={"center"}>
          <Typography 
          variant="h3" 
          backgroundColor="rgba(255, 255, 255, 0.7)"
          padding={4}
          >
            CONCURSO DE MÉRITOS Y OPOSICIÓN 2023
          </Typography>
          <br />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button 
          variant="contained" 
          color="error" 
          onClick={handleOpen}>
            Mas información
          </Button>
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>INFORMACION</DialogTitle>
            <DialogContent color="black">
              <DialogContentText>
                Aquí encontrarás la información del concurso 2023:
              </DialogContentText>
  
              <Box padding={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://www.espe.edu.ec/campus/" target="_blank" rel="noopener" style={linkStyle}>
                    <SchoolIcon fontSize="large" />
                    <span>NUESTRAS SEDES</span>
                  </Link>
                </Box>
              </Box>
              <Box padding={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://hcu.espe.edu.ec/wp-content/uploads/2023/05/ESPE-HCU-RES-2023-038.pdf" target="_blank" rel="noopener" style={linkStyle}>
                    <PictureAsPdfIcon fontSize="large" />
                    <span>BASES DEL CONCURSO 2023</span>
                  </Link>
                </Box>
              </Box>
              <Box pt={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://hcu.espe.edu.ec/wp-content/uploads/2023/05/RESOLUCION-2023-037-1.pdf" target="_blank" rel="noopener" style={linkStyle}>
                    <CalendarMonthIcon fontSize="large" />
                    <span>CRONOGRAMA</span>
                  </Link>
                </Box>
              </Box>
            </DialogContent>
            
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                <CloseIcon/>
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </div>
    </>
  );
}
