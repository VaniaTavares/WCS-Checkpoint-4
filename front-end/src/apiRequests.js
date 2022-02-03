import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_API,
});

export const axiosAuth = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_SERVER_API_AUTH,
});

export const axiosYelp = axios.create({
  baseURL: process.env.REACT_APP_API_YELP,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});
