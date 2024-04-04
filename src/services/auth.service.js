import axios from "axios";
import { jwtDecode } from "jwt-decode";
import api from "./api";

const apiURL = import.meta.env.VITE_API_URL;

export const login = (data, callback) => {
  axios
    .post(`${apiURL}/login`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getUser = (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};

export const logout = (callback) => {
  api
    .post(`${apiURL}/logout`)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const register = (data, callback) => {
  axios
    .post(`${apiURL}/register`, data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const forgotPassword = (data, callback) => {
  axios
    .post(`${apiURL}/forgot-password`, data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const changePassword = (data, callback) => {
  axios
    .post(`${apiURL}/change-password`, data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const loginGoogle = (data, callback) => {
  axios
    .post(`${apiURL}/login/google`, data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};