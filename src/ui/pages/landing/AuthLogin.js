import { useNavigate } from "react-router-dom";

// material-ui
import { GoogleLogin } from "react-google-login";

// project imports
import AnimateButton from "ui/components/extended/AnimateButton";
import config from "config";
import { useDispatch } from "react-redux";
import { googleOAuth2 } from "store/actions";

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onGoogleSuccess = (res) => {
        console.log("[Google OAuth] => Success");
        googleOAuth2(dispatch, res);
        navigate("/app");
    };

    const onGoogleFailure = (res) => {
        console.log("[Google OAuth] => Failure");
        googleOAuth2(dispatch, res);
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
