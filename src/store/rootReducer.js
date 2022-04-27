import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer,
    profile: profileReducer
});

export default rootReducer;
