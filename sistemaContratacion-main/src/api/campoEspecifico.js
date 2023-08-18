import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirCampoEspecifico = () =>axios.get(`${API}/campoEspecifico`,{
    withCredentials: true,
  }); 