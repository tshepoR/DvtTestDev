import { GET_DEFAULT_ARTIST } from "../constants";
import { GET_PROFILE } from "../constants";
import { ERROR } from "../constants";

import { produce } from "immer";

const initState = {
   artitsList: [],
   profileData: undefined,
   error: false,
};
const ArtistReducer = (state = initState, action) => {
   switch (action.type) {
      case GET_DEFAULT_ARTIST: {
         debugger;
         const newState = produce(state, (draftState) => {
            draftState.artitsList = action.payload;
         });
         return newState;
      }
      case GET_PROFILE: {
         debugger;
         const newState = produce(state, (draftState) => {
            draftState.profileData = action.payload;
         });
         return newState;
      }
      case ERROR: {
         debugger;
         const newState = produce(state, (draftState) => {
            draftState.error = true;
         });
         return newState;
      }

      default: {
         return state;
      }
   }
};

export default ArtistReducer;
