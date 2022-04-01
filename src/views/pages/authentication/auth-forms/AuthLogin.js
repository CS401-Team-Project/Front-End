import { useNavigate } from "react-router-dom";

// material-ui
import { Grid } from "@mui/material";

import { GoogleLogin } from "react-google-login";

// project imports
import AnimateButton from "ui-component/extended/AnimateButton";
import config from "config";

// import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = () => {
    const navigate = useNavigate();
    // const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

    const onGoogleSuccess = (res) => {
        console.log("[Google Login Success] currentUser: ", res.profileObj);
        // TODO: API Call to check if user has already registered on the back-end
        let isRegistered = true;

        if (!isRegistered) {
            console.log("User is not registered.");
            // TODO: Possibly change this to a prettier dialog
            const response = confirm("It looks like you don't have an account yet.\nWould you like to register?");
            if (response) navigate(config.basename + config.paths.auth.register);
            return;
        }

        // If user is already registered, then redirect to overview
        console.log("User is already registered. Logging in...");
        navigate(config.basename + config.paths.app);
    };

    const onGoogleFailure = (res) => {
        console.log("[Google Login Failure] Error: ", res);
        // TODO: Error Handling
        alert("Google OAuth Failed");
    };
    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} align="center">
                    <AnimateButton>
                        <GoogleLogin
                            clientId={config.googleClientId}
                            buttonText={"Login with Google"}
                            onSuccess={onGoogleSuccess}
                            onFailure={onGoogleFailure}
                            cookiePolicy={"single_host_origin"}
                            style={{ margin: "100px auto" }}
                            isSignedIn={true}
                        />

                        {/* <Button
                                disableElevation
                                fullWidth
                                onClick={googleHandler}
                                size="large"
                                variant="outlined"
                                sx={{
                                    color: 'grey.700',
                                    backgroundColor: theme.palette.grey[100],
                                    borderColor: theme.palette.grey[100]
                                }}
                                >
                                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                    <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                                </Box>
                                Sign in with Google
                            </Button> */}
                    </AnimateButton>
                    <br></br>
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseLogin;
