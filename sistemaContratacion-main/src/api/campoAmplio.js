import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirCampoAmplio = () =>axios.get(`${API}/campoAmplio`,{
    withCredentials: true,
  }); 