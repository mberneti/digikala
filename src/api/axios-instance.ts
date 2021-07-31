import axios, { AxiosResponse } from "axios";
import { DIGIKALA_API_TOKEN, DIGIKALA_BASE_URL } from "../config";

export const axiosInstance = axios.create({
  baseURL: DIGIKALA_BASE_URL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    token: DIGIKALA_API_TOKEN,
  },
});

export const filterResponse = (response: AxiosResponse) =>
  Promise.resolve(response.data.data);
