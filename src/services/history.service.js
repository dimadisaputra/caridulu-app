import api from "./api";

export const createHistory = (data, callback) => {
  api
    .post(`/history`, data)
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
export const getHistory = (callback) => {
  api
    .get("/gethistory")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const deleteHistory = (callback) => {
  api
    .delete("/deletehistory")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
