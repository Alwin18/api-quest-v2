import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
})

axiosInstance.interceptors.request.use(
  config => {
    // do something before request is sent.
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
);

axiosInstance.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
);

export default axiosInstance;


