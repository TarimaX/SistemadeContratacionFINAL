import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./reducers/auth.slice";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Formulario from "./scenes/subir-postulacion";
import Auth from "./scenes/auth";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./scenes/home/Home";
import FormularioPostulacion from "./scenes/formulario-postulacion";
import login from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import Candidatos from "./scenes/tabla-candidatos";
import FormulariOferta from "./scenes/formulario-oferta";
import FormularioPeriodo from "./scenes/formulario-postulacion/PeriodoPostlacionForm";
import FormularioSede from "./scenes/formulario-postulacion/SedeForm";
import FormularioPacad from "./scenes/formulario-postulacion/PersonalAcadForm";
import FormularioDept from "./scenes/formulario-postulacion/DepartamentoForm";
import FormularioContratacion from "./scenes/formulario-postulacion/ContratacionForm";
import FormularioCaEspecifico from "./scenes/formulario-postulacion/CampoEspecificoForm";
import FormularioCaAmplio from "./scenes/formulario-postulacion/CampoAmplioForm";
import FormularioActividad from "./scenes/formulario-postulacion/ActividadForm";
import { Calificaciones } from "./scenes/tablas-calificacion";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <AuthProvider>
      {auth.isLogged ? (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/autenticacion" element={<Auth />} />
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/seleccionar-postulacion"
                  element={<FormularioPostulacion />}
                />
                <Route
                  path="/formulario-oferta"
                  element={<FormulariOferta />}
                />
                <Route path="/formulario-periodo" element={<FormularioPeriodo />} />
                <Route path="/formulario-contratacion" element={<FormularioContratacion />} />
                <Route path="/formulario-cespecifico" element={<FormularioCaEspecifico />} />
                <Route path="/formulario-camplio" element={<FormularioCaAmplio />} />
                <Route path="/formulario-sede" element={<FormularioSede />} />
                <Route path="/formulario-departamento" element={<FormularioDept />} />
                <Route path="/formulario-pacademico" element={<FormularioPacad />} />
                <Route path="/formulario-actividad" element={<FormularioActividad />} />

                <Route path="/subir-informacion" element={<Formulario />} />
                <Route path="/tabla-candidatos" element={<Candidatos />} />
                <Route path="/tablas-calificacion" element={<Calificaciones/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>

      </ColorModeContext.Provider>) : (<Auth />)}
    </AuthProvider>
  );
}
export default App;
