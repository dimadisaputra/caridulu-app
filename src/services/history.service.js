import axios from "axios";

export const getHistory = (token, callback) => {
  axios
    .get("http://localhost:8000/gethistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};

export const deleteHistory = (token, callback) => {
  axios
    .delete("http://localhost:8000/deletehistory", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => callback(true, res))
    .catch((err) => callback(false, err));
};
