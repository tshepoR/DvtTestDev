import artistService from "../services/artistService";
import { GET_DEFAULT_ARTIST } from "./constants";
import { GET_PROFILE } from "./constants";
import { ERROR } from "./constants";

export const getDefaultAristList = (artistName = "") => {
   return async (dispatch) => {
      try {
         const { data } = await artistService.getArtistData(artistName);
         if (true) {
            dispatch({
               type: GET_DEFAULT_ARTIST,
               payload: data,
            });
         }
      } catch (ex) {
         dispatch({
            type: ERROR,
         });
      }
   };
};
export const getProfile = (url) => {
   return async (dispatch) => {
      try {
         const { data } = await artistService.getProflleData(url);
         debugger;
         if (true) {
            dispatch({
               type: GET_PROFILE,
               payload: data,
            });
         }
      } catch (ex) {
         dispatch({
            type: ERROR,
         });
      }
   };
};
