import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// material-ui
import { Grid } from "@mui/material";

// third party
import { GoogleLogin } from "react-google-login";

// project imports
import AnimateButton from "ui/components/extended/AnimateButton";
import { strengthColor, strengthIndicator } from "utils/password-strength";
import config from "config";
// import Google from 'assets/images/icons/social-google.svg';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = () => {
    const navigate = useNavigate();

    // eslint-disable-next-line
    const [strength, setStrength] = useState(0);
    // eslint-disable-next-line
    const [level, setLevel] = useState();

    const onGoogleSuccess = (res) => {
        console.log("[Google Signup Success] currentUser: ", res.profileObj);
        // TODO: API Call to check if user has already registered on the back-end
        let isRegistered = true;

        if (!isRegistered) {
            console.log("User is not yet registered.");
            // TODO: If user is not registered, handle registration on the back-end
            return;
        }

        // If user is already registered, then redirect to overview
        console.log("User is already registered. Logging in...");
        navigate(config.basename + config.paths.app);
    };

    const onGoogleFailure = (res) => {
        console.log("[Google Signup Failure] Error: ", res);
        // TODO: Error Handling
        alert("Google OAuth Failed");
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword("123456");
    }, []);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} align="center">
                    <AnimateButton>
                        <GoogleLogin
                            clientId={config.googleClientId}
                            buttonText={"Sign up with Google"}
                            onSuccess={onGoogleSuccess}
                            onFailure={onGoogleFailure}
                            cookiePolicy={"single_host_origin"}
                            style={{ margin: "100px auto" }}
                            isSignedIn={true}
                        />
                        {/* <Button
                                variant="outlined"
                                fullWidth
                                onClick={googleHandler}
                                size="large"
                                sx={{
                                    color: 'grey.700',
                                    backgroundColor: theme.palette.grey[100],
                                    borderColor: theme.palette.grey[100]
                                }}
                            >
                                <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                    <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                                </Box>
                                Sign up with Google
                            </Button> */}
                    </AnimateButton>
                    <br />
                </Grid>
            </Grid>
        </>
    );
};

export default FirebaseRegister;
