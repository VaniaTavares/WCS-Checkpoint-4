import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_API,
});

export const axiosAuth = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_API_AUTH,
});
