import { useNavigate } from "react-router-dom";

// material-ui
import { GoogleLogin } from "react-google-login";

// project imports
import AnimateButton from "ui/components/extended/AnimateButton";
import config from "config";

// import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    // const authApi = useApi(userApi.register);
    const navigate = useNavigate();

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     console.log("HERE");
    //     if (isLoggedIn) {
    //         console.log("HERE logged in");
    //         if (authApi.data && !authApi.error) {
    //             // save login state to local storage
    //             console.log("Successfully authenticated with API server.");
    //             localStorage.setItem("token", "true");
    //             navigate("/app");
    //         } else if (authApi.error) {
    //             console.log("Failed to authenticate with API server.");
    //             localStorage.removeItem("isLoggedIn");
    //             setIsLoggedIn(false);
    //         }
    //     }
    // }, [authApi.data, authApi.error, isLoggedIn]);

    const onGoogleSuccess = (res) => {
        console.log("[Google Login Success]");
        // await authApi.requestSlow(res.tokenId);
        localStorage.setItem("token", res.tokenId);
        navigate("/app");
    };

    const onGoogleFailure = (res) => {
        console.log("[Google Login Failure] Error: ", res);
        // TODO: Error Handling
        alert("Google OAuth Failed");
    };

    // const retryAuth = () => {
    //     console.log("[Google Login Retry]");
    //     authApi.reset();
    // };

    return (
        // <StateHandler api={authApi} retryHandler={retryAuth}>
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
        // </StateHandler>
    );
};

export default AuthLogin;
