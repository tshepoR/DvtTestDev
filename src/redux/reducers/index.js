import { combineReducers } from "redux";
import artistReducer from "./artistReducer";
//more reducers to be added later

export default combineReducers({
   artist: artistReducer,
});
