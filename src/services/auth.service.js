import axios from "axios";
import { jwtDecode } from "jwt-decode";
import api from "./api";

export const login = (data, callback) => {
  axios
    .post("http://localhost:8000/login", data)
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
    .post("http://localhost:8000/logout")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const register = (data, callback) => {
  axios
    .post("http://localhost:8000/register", data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const forgotPassword = (data, callback) => {
  axios
    .post("http://localhost:8000/forgot-password", data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const changePassword = (data, callback) => {
  axios
    .post("http://localhost:8000/change-password", data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};