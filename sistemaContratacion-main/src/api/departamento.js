import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirDepartamento = () =>axios.get(`${API}/departamento`,{
    withCredentials: true,
  }); 