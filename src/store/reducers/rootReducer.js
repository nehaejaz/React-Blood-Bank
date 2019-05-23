import authReducer from "./authReducer";
import donorReducer from "./donorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  donor: donorReducer
});

export default rootReducer;
