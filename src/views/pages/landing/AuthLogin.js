import { useNavigate } from "react-router-dom";

// material-ui
import { GoogleLogin } from "react-google-login";

// project imports
import AnimateButton from "ui-component/extended/AnimateButton";
import config from "config";
import useApi from "hooks/useApi";
import userApi from "api/user";
import { useEffect, useState } from "react";

// import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authApi = useApi(userApi.register);
    const navigate = useNavigate();

    const onGoogleSuccess = async (res) => {
        console.log("[Google Login Success]");
        await authApi.request(res.tokenId);
        setIsLoggedIn(true);
    };
    //
    useEffect(() => {
        if (authApi.data && !authApi.error) {
            // save login state to local storage
            localStorage.setItem("isLoggedIn", "true");
            navigate("/app");
        }
    }, [isLoggedIn]);

    const onGoogleFailure = (res) => {
        console.log("[Google Login Failure] Error: ", res);
        // TODO: Error Handling
        alert("Google OAuth Failed");
    };
    return (
        <AnimateButton>
            <GoogleLogin
                clientId={config.googleClientId}
                buttonText={"Google Account"}
                onSuccess={onGoogleSuccess}
                onFailure={onGoogleFailure}
                cookiePolicy={"single_host_origin"}
                style={{ margin: "100px auto" }}
                isSignedIn={true}
            />
        </AnimateButton>
    );
};

export default AuthLogin;
