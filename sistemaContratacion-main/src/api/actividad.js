import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirActividad = () =>axios.get(`${API}/actividad`,{
    withCredentials: true,
  }); 