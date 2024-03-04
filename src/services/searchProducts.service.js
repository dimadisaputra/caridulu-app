import axios from "axios";

export const searchProducts = (callback) => {
  axios
    .get(`http://localhost:8000/search?keyword=keyboard%20mechanical`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
