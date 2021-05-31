import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// console.log(process.env)

// const token =  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzI5NjFhMmUyNDAyZTJiYzkyNzBkZGYxMmU3NmU4ZCIsInN1YiI6IjYwYjI2Y2Y2YjdiNjlkMDA2ZWNjZmZlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kiW9QFiM2kuSofOPCfrXtS9Txx4xnmsd4yVX-yJJSwg';

// api.interceptors.request.use(async config => {
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// }, function (error) {
//   return Promise.reject(error)
// });

api.interceptors.response.use(function (response) {
  return response?.data;
}, function (error) {
  return Promise.reject(error);
});

api.interceptors.response.use(undefined, error => {
  return Promise.reject(error.response.data);
})

export default api;