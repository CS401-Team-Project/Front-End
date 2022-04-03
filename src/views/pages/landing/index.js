import { Link } from "react-router-dom";

// material-views
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

// project imports
import Logo from "ui-component/Logo";
import AuthFooter from "ui-component/cards/AuthFooter";
import AuthWrapper from "./AuthWrapper";
import AuthCardWrapper from "./AuthCardWrapper";
import AuthLogin from "./AuthLogin";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AuthWrapper>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh - 68px)" }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Stack spacing={3}>
                                    <Link to="#">
                                        <Logo />
                                    </Link>
                                    <Divider />

                                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                                        <Typography color={theme.palette.secondary.dark} gutterBottom variant={matchDownSM ? "h3" : "h2"}>
                                            Hi, Welcome to Smart Ledger!
                                        </Typography>
                                        <Typography variant="caption" fontSize="16px" textAlign="center">
                                            Keep track of your shared expenses and balances with housemates, trips, groups, friends, and
                                            family.
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={1} alignItems="center" justifyContent="center">
                                        <Typography color={theme.palette.secondary.main} gutterBottom variant="h3" textAlign="center">
                                            Log in or register
                                        </Typography>

                                        <AuthLogin />
                                    </Stack>
                                    <Divider />
                                    <Typography variant="caption" fontSize="14px" textAlign="center">
                                        At this moment we only support Google Authentication
                                    </Typography>
                                </Stack>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Login;
