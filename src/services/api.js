import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = (data) => api.post("/auth/login", data, { withCredentials: true });
export const register = (data) => api.post("/auth/register", data, { withCredentials: true });
export const forgotPassword = (email) => api.post("/auth/forgot-password", { email }, { withCredentials: true });
export const resetPassword = (token, password) => api.post("/auth/reset-password", { token, password }, { withCredentials: true });



// 👉 Inject JWT automatiquement
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 👉 Gestion globale des erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
