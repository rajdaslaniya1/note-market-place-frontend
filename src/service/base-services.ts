import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Show loader when request starts
    // Here, you can use a callback function or event to update the loader state
    console.log("Request started");
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export const apiService = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.request<T>(config);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
