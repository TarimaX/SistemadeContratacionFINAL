import axios from "axios";

const API = "http://localhost:8800/api";
export const pedirPersonalAcademico = () =>axios.get(`${API}/personalAcademico`,{
    withCredentials: true,
  }); 
