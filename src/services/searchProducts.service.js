import axios from "axios";

export const searchProducts = (keyword, callback) => {
  axios
    .get(`http://localhost:8000/search${keyword}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
