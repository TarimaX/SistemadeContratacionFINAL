import { Box, Typography, useTheme, Button, Container, } from "@mui/material";
import { tokens } from "../../theme";
import styled from "@emotion/styled";
import { useState } from "react";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Excel from './excel.jpeg';
import Pdf from './pdf.png';
import Word from './word.png';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  const [open, setOpen] = useState(false);

  const [button1Color, setButton1Color] = useState('primary');
  const [button2Color, setButton2Color] = useState('primary');

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1Color(button1Color === 'primary' ? 'secondary' : 'primary');
    } else if (buttonNumber === 2) {
      setButton2Color(button2Color === 'primary' ? 'secondary' : 'primary');
    }
  };

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
    <Box sx={{ backgroundColor: "#caf7dc", minHeight: "80vh" }}>
    <Container>
      <CustomBox>
        <Box sx={{ flex: "1" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              color: "#687690",
              fontWeight: "500",
              mt: 10,
              mb: 4,
            }}
          >
            Bienvenidos a la plataforma ESPE DOCENTES
          </Typography>
          <Title variant="h1">
            !Revisa el formato de los documentos que tienes que entregar!
          </Title>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "#5A6473", my: 2 }}
          >
          Para mayor información dale click al botón
          </Typography>
          <Box alignContent={"center"}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpen}>
            Formatos Aqui!
          </Button>
          </Box>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle align='center'><span>FORMATOS VALIDOS</span></DialogTitle>
            <DialogContent color="black">
              <DialogContentText>
                Aquí encontrarás los formatos de archivo disponibles que puedes usar para subir tu información:
              </DialogContentText>
  
              <Box padding={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://docs.google.com/spreadsheets/d/1BI8Nsc6NLHcvn3YTrSsiDUijB6tlqvAZ/edit?usp=sharing&ouid=110804931965251293168&rtpof=true&sd=true" target="_blank" rel="noopener" style={linkStyle}>
                    <img src={Excel} alt="formato excel hoja de vida" width={60}/>
                    <span>HOJA DE VIDA FORMATO ESPE</span>
                  </Link>
                </Box>
              </Box>
              <Box padding={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://drive.google.com/drive/folders/1SVSiyfRVn_bSfRZN4n5-nl5QAhoLa0ea?usp=sharing" target="_blank" rel="noopener" style={linkStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={Pdf} alt="formato certificado pdf" width={60} />
                      <img src={Word} alt="formato certificado word" width={60} />
                    </div>
                    <span>CERTIFICADOS EXPERIENCIA PROFESIONAL DOCENTE</span>
                  </Link>
                  
                </Box>
              </Box>
              <Box pt={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box style={boxStyle}>
                  <Link href="https://drive.google.com/drive/folders/1VPXTLAUtw2EmKRxKYUT-tPz2RxdD69Np?usp=drive_link" target="_blank" rel="noopener" style={linkStyle}>
                   <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={Pdf} alt="formato certificado pdf" width={60} />
                      <img src={Word} alt="formato certificado word" width={60} />
                    </div>
                    <span>CERTIFICADOS EXPERIENCIA PROFESIONAL</span>
                  </Link>
                </Box>
              </Box>
            </DialogContent>
            
            <DialogActions>
              <Button onClick={handleClose} color="secondary">
                <CloseIcon/>
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <br/>
        <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        variant="contained"
        color={button1Color}
        onClick={() => handleButtonClick(1)}
        sx={{ flexGrow: 1 }}
      >
        Estado Postulación
      </Button>

      <Button
        variant="contained"
        color={button2Color}
        onClick={() => handleButtonClick(2)}
        sx={{ flexGrow: 1 }}
      >
        Estado Información
      </Button>

      <br/>
      <br/>
    </Box>
    <br/>

        </Box>
        <Box
            bgcolor="#f1f1f1"
            m={1}
            p="30vh"
            fontSize="30px"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ flex: "0.3",               
            backgroundImage: `url(https://uec-el.espe.edu.ec/wp-content/uploads/2018/11/espe-banner-estudiantes.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "-40vh 0",
            backgroundRepeat: "no-repeat", }}>           
          </Box>
    
      </CustomBox>
    </Container>
  </Box>
  );
};

export default Dashboard;
