import axiosInstance from "./axios";
import axios from "axios";
export default class ArtistService {
   static getArtistData = (searchString) => {
      debugger;
      return axiosInstance.get(`search?q=${searchString}`, {
         headers: {
            "Access-Control-Allow-Origin": "*",
         },
      });
   };

   static getProflleData = (url) => {
      debugger;
      return axios.get(url, {
         headers: {
            "Access-Control-Allow-Origin": "*",
         },
      });
   };
}
