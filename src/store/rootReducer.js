import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customizationReducer";
import authReducer from "./authReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer,
    auth: authReducer
});

export default rootReducer;
