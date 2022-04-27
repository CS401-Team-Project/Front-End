// action - customization reducer

export const SET_MENU = "@customization/SET_MENU";
export const MENU_TOGGLE = "@customization/MENU_TOGGLE";
export const MENU_OPEN = "@customization/MENU_OPEN";
export const SET_FONT_FAMILY = "@customization/SET_FONT_FAMILY";
export const SET_BORDER_RADIUS = "@customization/SET_BORDER_RADIUS";
export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const googleOAuth2 = (dispatch, googleResponse) => {
    if (typeof googleResponse === "undefined" || googleResponse === null) {
        googleResponse = [];
    }
    dispatch({ type: GOOGLE_OAUTH2, googleResponse });
};

export const setUserProfile = (dispatch, userProfile) => {
    if (typeof userProfile === "undefined" || userProfile === null) {
        userProfile = [];
    }
    dispatch({ type: SET_USER_PROFILE, userProfile });
};
