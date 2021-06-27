import axios from "axios";

const baseApiUrl =
   "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

const axiosInstance = axios.create({
   baseURL: baseApiUrl,
});

axiosInstance.interceptors.response.use(null, (error) => {
   if (error && error.response.status === 401) {
      //   authUser.removeTokenFromLocalStorage();
      //   return (window.location = "/");
   }
   return Promise.reject(error);
});

export default axiosInstance;
