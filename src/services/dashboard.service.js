import api from "./api";

const apiURL = import.meta.env.VITE_API_URL;

export const getAllUsers = (callback) => {
  api
    .get(`${apiURL}/getusers`)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const getAllHistory = (callback) => {
  api
    .get(`${apiURL}/gethistories`)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
