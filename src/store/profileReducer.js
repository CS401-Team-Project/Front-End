import * as actionTypes from "./actions";

const initialState = {};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_PROFILE: {
            return action.data.data;
        }
        default:
            return state;
    }
};

export default profileReducer;
