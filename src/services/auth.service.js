import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("http://localhost:8000/login", data)
    .then((res) => {
      callback(true, res.data)
    })
    .catch((error) => {
      callback(false, error)
    });
};



export const getUser = (token) => {
    const decoded = jwtDecode(token);
    return decoded
}
