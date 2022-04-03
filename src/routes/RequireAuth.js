import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import { useGoogleLogout } from "react-google-login";
import config from "config";

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

    const { signOut, loaded } = useGoogleLogout({ clientId: config.googleClientId });
    const authApi = useApi(userApi.register);
    const navigate = useNavigate();

    useEffect(async () => {
        // console.log("RequireAuth - Effect 1");
        if (!token) {
            console.log("No token, redirecting to login");
            navigate("/");
        } else {
            console.log("Token found, authenticating with backend server");
            authApi.requestSlow(token);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log("RequireAuth - Effect 2");
        if (authApi.error) {
            console.log("Failed to authenticate with API server.");
            localStorage.removeItem("token");
        }
    }, [authApi.error]);

    const retryAuth = () => {
        console.log("[RequireAuth Retry]");
        signOut();
        localStorage.removeItem("token");
        navigate("/");
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
