import axios from "axios";

export const searchProducts = (keyword, callback) => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/search${keyword}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
