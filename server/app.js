import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import actividadRoutes from "./routes/actividad.routes.js";
import campoAmplioRoutes from "./routes/campo_amplio.routes.js";
import campoEspecificoRoutes from "./routes/campo_especifico.routes.js";
import contratacionRoutes from "./routes/contratacion.routes.js";
import sedeRoutes from "./routes/sede.routes.js";
import personalAcademicoRoutes from "./routes/personal_academico.routes.js";
import tituloExpRoutes from "./routes/titulo_exp.routes.js";
import solicitudRoutes from "./routes/solicitud.routes.js";
import departamentoRoutes from "./routes/departamento.routes.js";
import requisitoRoutes from "./routes/requisito.routes.js";
import itemRoutes from "./routes/item.routes.js";
import postulacionRoutes from "./routes/postulacion.routes.js";
import ofertaRoutes from "./routes/oferta.routes.js";
import infoRoutes from "./routes/informacion.routes.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Replace this with your frontend domain
  credentials: true, // Allow sending credentials (cookies)
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));
//Midleware
app.use(morgan("dev"));
//Lectura formatos json
app.use(express.json());
//Lectura de cookies
app.use(cookieParser());
//Rutas
app.use("/api", authRoutes);
app.use("/api", actividadRoutes);
app.use("/api", campoAmplioRoutes);
app.use("/api", campoEspecificoRoutes);
app.use("/api", contratacionRoutes);
app.use("/api", sedeRoutes);
app.use("/api", sedeRoutes);
app.use("/api", personalAcademicoRoutes);
app.use("/api", tituloExpRoutes);
app.use("/api", solicitudRoutes);
app.use("/api", departamentoRoutes);
app.use("/api", requisitoRoutes);
app.use("/api", itemRoutes);
app.use("/api", postulacionRoutes);
app.use("/api", ofertaRoutes);
app.use("/api/informacion", infoRoutes);
export default app;
