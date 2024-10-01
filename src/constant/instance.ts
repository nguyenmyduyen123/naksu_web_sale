import axios from "axios";

export const TIMEOUT = 10 * 60 * 1000; // 10 minutes

export const COMMON_HEADERS = {
  responseType: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json;charset=UTF-8",
};

export const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: COMMON_HEADERS,
  timeout: TIMEOUT,
});

class APIManager {
}

