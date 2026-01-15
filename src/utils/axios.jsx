import axios from "axios";

const instance = axios.create({
   baseURL: 'https://fakestoreapi.com',
   // withCredentials: True
});   

instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
      console.log("response ---> ", response);

    return response;
  }, function (error) {
    return Promise.reject(error);
});
  
export default instance;