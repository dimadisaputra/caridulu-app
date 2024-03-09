import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.post("http://localhost:8000/refresh-token", {
          refresh_token: refreshToken,
        });

        const { access_token } = response.data;

        localStorage.setItem("access_token", access_token);

        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axios(originalRequest);
      } catch (error) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
