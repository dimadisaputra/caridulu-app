import axios from "axios";
import api from "./api";

export const createHistory = (data, callback) => {
  api
    .post("http://localhost:8000/history", data)
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
    .delete("http://localhost:8000/deletehistory")
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
