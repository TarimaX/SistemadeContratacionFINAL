import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import user from './usuario2.png'
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "white",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const collapsedWidth = "80px";

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#006935 !important`,
       
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#4cceac !important",
        },
        "& .pro-menu-item.active": {
          color: "#78edcf !important",
        },
height : "150vh"
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[900]}>
                  Contratacion
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color: "white" }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="foto-de-perfil"
                  width="100px"
                  height="100px"
                  
                  src={user}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[900]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Usuario
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Postulante
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Inicio"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* Conditional rendering based on 'isCollapsed' */}
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[900]} sx={{ m: "15px 0 5px 20px" }}>
                Postulación
              </Typography>
            )}

            <Item
              title="Seleccionar Postulación"
              to="/seleccionar-postulacion"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Subir Información"
              to="/subir-informacion"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
              <Item
              title="Tabla Candidatos"
              to="/tabla-candidatos"
              icon={<RecentActorsRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                         <Item
              title="Calificaciones"
              to="/tablas-calificacion"
              icon={<RecentActorsRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Oferta"
              to="/formulario-oferta"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Formulario Periodo"
              to="/formulario-periodo"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tipo de Contratacion"
              to="/formulario-contratacion"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Campo especifico"
              to="/formulario-cespecifico"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Campo Amplio"
              to="/formulario-camplio"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Sede"
              to="/formulario-sede"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Departamento"
              to="/formulario-departamento"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Personal Academico"
              to="/formulario-pacademico"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Actividad"
              to="/formulario-actividad"
              icon={< AppRegistrationIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
