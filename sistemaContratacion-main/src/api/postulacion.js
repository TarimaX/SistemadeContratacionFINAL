import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirPostulaciones = () =>axios.get(`${API}/postulacion`,{
    withCredentials: true,
  }); 

