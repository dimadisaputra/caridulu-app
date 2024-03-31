import api from "./api";

export const getAllUsers = (callback) => {
  api
    .get(`/getusers`)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const getAllHistory = (callback) => {
  api
    .get(`/gethistories`)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
