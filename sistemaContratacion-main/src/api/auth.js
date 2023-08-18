import axios from "axios";

const API = "http://localhost:8800/api";
export const registerRequest = (user) => axios.post(`${API}/register`, user,{
    withCredentials: true,
  });

export const loginRequest = (user) => axios.post(`${API}/login`, user,{
    withCredentials: true,
  });

export const verifyTokenRequest = () =>axios.get(`${API}/verify`,{
    withCredentials: true,
  }); 