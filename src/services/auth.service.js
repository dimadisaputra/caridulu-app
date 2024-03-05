import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

export const logout = (token, callback) => {
  axios
    .post("http://localhost:8000/logout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const register = (data, callback) => {
  axios
    .post("http://localhost:8000/register", data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
