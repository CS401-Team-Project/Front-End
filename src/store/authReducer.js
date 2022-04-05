import * as actionTypes from "./actions";

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GOOGLE_OAUTH2: {
            return action.googleResponse;
        }
        default:
            return state;
    }
};

export default authReducer;
