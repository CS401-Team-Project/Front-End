// material-ui
import { useTheme } from "@mui/material/styles";
import { Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";

// project imports
import AuthWrapper1 from "../AuthWrapper1";
import AuthCardWrapper from "../AuthCardWrapper";
import AuthLogin from "../auth-forms/AuthLogin";
import AuthFooter from "ui/components/cards/AuthFooter";
import LogoSection from "ui/layout/MainLayout/LogoSection";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: "calc(100vh - 68px)" }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ m: 1 }}>
                                        <LogoSection />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>

                                    <Grid
                                        container
                                        item
                                        sx={{ mt: 2, mb: 2 }}
                                        direction={matchDownSM ? "column-reverse" : "row"}
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Stack spacing={2}>
                                            <Typography
                                                color={theme.palette.secondary.main}
                                                gutterBottom
                                                variant={matchDownSM ? "h3" : "h2"}
                                            >
                                                Select an option to Login or Register
                                            </Typography>

                                            <Grid item>
                                                <AuthLogin />
                                            </Grid>
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>

                                    <Grid item alignItems="center" justifyContent="center">
                                        <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? "center" : "inherit"}>
                                            At this moment we only support Google Authentication
                                        </Typography>
                                    </Grid>

                                    {/*<Grid item xs={12}>*/}
                                    {/*    <Grid item container direction="column" alignItems="center" xs={12}>*/}
                                    {/*        <Typography*/}
                                    {/*            component={Link}*/}
                                    {/*            to={config.basename + config.paths.auth.register}*/}
                                    {/*            variant="subtitle1"*/}
                                    {/*            sx={{ textDecoration: "none" }}*/}
                                    {/*        >*/}
                                    {/*            Don&apos;t have an account?*/}
                                    {/*        </Typography>*/}
                                    {/*    </Grid>*/}
                                    {/*</Grid>*/}
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
