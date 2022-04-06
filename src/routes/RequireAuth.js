import PropTypes from "prop-types";
import { useEffect } from "react";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import { useGoogleLogout } from "react-google-login";
import config from "config";
import { useDispatch } from "react-redux";
import { googleOAuth2 } from "store/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "store/index";

const RequireAuth = ({ children }) => {
    // const auth = useSelector((state) => state.auth);
    const auth = store.getState().auth;
    const dispatch = useDispatch();
    const lastLocation = useLocation();
    const navigate = useNavigate();
    const authApi = useApi(userApi.register);

    const { signOut } = useGoogleLogout({
        clientId: config.googleClientId,
        onLogoutSuccess: (res) => {
            googleOAuth2(dispatch, res);
        }
    });

    useEffect(() => {
        if (!auth.tokenId) {
            const navigateTo = `/?redirectTo=${lastLocation.pathname}`;
            console.log("[RequireAuth] - No token, redirecting to login ->", navigateTo);
            navigate(navigateTo);
        } else {
            console.log("[RequireAuth] - Token found, authenticating with backend server");
            authApi.request();
        }
        // eslint-disable-next-line
    }, [auth.tokenId]);

    const retryAuth = () => {
        console.log("[RequireAuth] - Retry");
        signOut();
    };

    return (
        <StateHandler api={authApi} retryHandler={retryAuth}>
            {children}
        </StateHandler>
    );
};

RequireAuth.propTypes = {
    children: PropTypes.node.isRequired
};

export default RequireAuth;
