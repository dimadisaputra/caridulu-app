import api from "./api";

const apiURL = import.meta.env.VITE_API_URL;

export const createHistory = (data, callback) => {
  api
    .post(`${apiURL}/history`, data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
export const getHistory = (callback) => {
  api
    .get("${apiURL}/gethistory")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const deleteHistory = (callback) => {
  api
    .delete("${apiURL}/deletehistory")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
