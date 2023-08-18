import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirContratacion = () =>axios.get(`${API}/contratacion`,{
    withCredentials: true,
  }); 