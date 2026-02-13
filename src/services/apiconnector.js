import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,  // if backend uses cookies
});

// Add token automatically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ✅ no quotes
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ?? null,
    headers: headers ?? {},
    params: params ?? {},
  });
};
