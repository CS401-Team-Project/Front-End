import { useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Chip,
    ClickAwayListener,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Stack,
    Typography
} from "@mui/material";

// third-party
import { GoogleLogout } from "react-google-login";

// project imports
import MainCard from "ui/components/cards/MainCard";
import Transitions from "ui/components/extended/Transitions";
import config from "config";

// assets
import { IconLogout, IconSettings } from "@tabler/icons";
import { googleOAuth2 } from "store/actions";
import { store } from "store/index";

import UserPreferencesDialog from "ui/components/UserPreferencesDialog";

// api imports
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const [sdm, setSdm] = useState(true);
    // const [value, setValue] = useState("");
    // const [notification, setNotification] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    /**
     * anchorRef is used on different componets and specifying one type leads to other views-components throwing an error
     * */
    const anchorRef = useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = "") => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== "") {
            navigate(route);
        }
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const onLogoutSuccess = () => {
        googleOAuth2(dispatch, {});
        navigate("/");
    };

    const userProfileApi = useApi(userApi.getUser);
    const sub = store.getState().auth.Ba;

    useEffect(() => {
        userProfileApi.requestSlow(sub);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        userProfileApi.requestSlow(sub);
    };

    return (
        <StateHandler api={userProfileApi} retryHandler={retry}>
            {userProfileApi.data && (
                <>
                    <Chip
                        sx={{
                            height: "48px",
                            alignItems: "center",
                            borderRadius: "27px",
                            transition: "all .2s ease-in-out",
                            borderColor: theme.palette.primary.light,
                            backgroundColor: theme.palette.primary.light,
                            '&[aria-controls="menu-list-grow"], &:hover': {
                                borderColor: theme.palette.primary.main,
                                background: `${theme.palette.primary.main}!important`,
                                color: theme.palette.primary.light,
                                "& svg": {
                                    stroke: theme.palette.primary.light
                                }
                            },
                            "& .MuiChip-label": {
                                lineHeight: 0
                            }
                        }}
                        icon={
                            <Avatar
                                src={userProfileApi.data.data.picture}
                                sx={{
                                    ...theme.typography.mediumAvatar,
                                    margin: "8px 0 8px 8px !important",
                                    cursor: "pointer"
                                }}
                                ref={anchorRef}
                                aria-controls={open ? "menu-list-grow" : undefined}
                                aria-haspopup="true"
                                color="inherit"
                            />
                        }
                        label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
                        variant="outlined"
                        ref={anchorRef}
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="primary"
                    />
                    <Popper
                        placement="bottom-end"
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        popperOptions={{
                            modifiers: [
                                {
                                    name: "offset",
                                    options: {
                                        offset: [0, 14]
                                    }
                                }
                            ]
                        }}
                    >
                        {({ TransitionProps }) => (
                            <Transitions in={open} {...TransitionProps}>
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                            <Box sx={{ p: 2 }}>
                                                <Stack direction="row" spacing={2} alignItems="center">
                                                    <Avatar
                                                        src={userProfileApi.data.data.picture}
                                                        sx={{
                                                            ...theme.typography.mediumAvatar,
                                                            margin: "8px 0 8px 8px !important",
                                                            cursor: "pointer"
                                                        }}
                                                        color="inherit"
                                                    />
                                                    <Stack>
                                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                                            {/*<Typography variant="h4">Good Morning,</Typography>*/}
                                                            <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                                                                {`${userProfileApi.data.data.first_name} ${userProfileApi.data.data.last_name}`}
                                                            </Typography>
                                                        </Stack>
                                                        <Typography variant="subtitle2">{userProfileApi.data.data.email}</Typography>
                                                    </Stack>
                                                </Stack>

                                                {/*<OutlinedInput*/}
                                                {/*    sx={{ width: "100%", pr: 1, pl: 2, my: 2 }}*/}
                                                {/*    id="input-search-profile"*/}
                                                {/*    value={value}*/}
                                                {/*    onChange={(e) => setValue(e.target.value)}*/}
                                                {/*    placeholder="Search profile options"*/}
                                                {/*    startAdornment={*/}
                                                {/*        <InputAdornment position="start">*/}
                                                {/*            <IconSearch stroke={1.5} size="1rem" color={theme.palette.grey[500]} />*/}
                                                {/*        </InputAdornment>*/}
                                                {/*    }*/}
                                                {/*    aria-describedby="search-helper-text"*/}
                                                {/*    inputProps={{*/}
                                                {/*        "aria-label": "weight"*/}
                                                {/*    }}*/}
                                                {/*/>*/}
                                            </Box>
                                            <Divider />
                                            <Box sx={{ p: 2 }}>
                                                <Stack spacing={1}>
                                                    <Typography variant="subtitle">{`Date joined: ${userProfileApi.data.data.date.created.$date.slice(
                                                        0,
                                                        10
                                                    )}`}</Typography>
                                                    {userProfileApi.data.data.pay_with.preferred && (
                                                        <Typography variant="subtitle">
                                                            Preferred Payment Service:{" "}
                                                            {userProfileApi.data.data.pay_with.preferred
                                                                .replace("cashapp", "Cash App")
                                                                .replace("paypal", "PayPal")
                                                                .replace("venmo", "Venmo")}
                                                        </Typography>
                                                    )}
                                                    {userProfileApi.data.data.pay_with.cashapp && (
                                                        <Typography variant="subtitle">
                                                            Cash App Username: {userProfileApi.data.data.pay_with.cashapp}
                                                        </Typography>
                                                    )}
                                                    {userProfileApi.data.data.pay_with.paypal && (
                                                        <Typography variant="subtitle">
                                                            PayPal Username: {userProfileApi.data.data.pay_with.paypal}
                                                        </Typography>
                                                    )}
                                                    {userProfileApi.data.data.pay_with.venmo && (
                                                        <Typography variant="subtitle">
                                                            Venmo Username: {userProfileApi.data.data.pay_with.venmo}
                                                        </Typography>
                                                    )}
                                                </Stack>
                                            </Box>

                                            <Divider />
                                            <Box sx={{ p: 1 }}>
                                                {/*<UpgradePlanCard />*/}
                                                {/*<Divider />*/}
                                                {/*<Card*/}
                                                {/*    sx={{*/}
                                                {/*        bgcolor: theme.palette.primary.light,*/}
                                                {/*        my: 2*/}
                                                {/*    }}*/}
                                                {/*>*/}
                                                {/*    <CardContent>*/}
                                                {/*        <Grid container spacing={3} direction="column">*/}
                                                {/*            <Grid item>*/}
                                                {/*                <Grid item container alignItems="center" justifyContent="space-between">*/}
                                                {/*                    <Grid item>*/}
                                                {/*                        <Typography variant="subtitle1">Start DND Mode</Typography>*/}
                                                {/*                    </Grid>*/}
                                                {/*                    <Grid item>*/}
                                                {/*                        <Switch*/}
                                                {/*                            color="primary"*/}
                                                {/*                            checked={sdm}*/}
                                                {/*                            onChange={(e) => setSdm(e.target.checked)}*/}
                                                {/*                            name="sdm"*/}
                                                {/*                            size="small"*/}
                                                {/*                        />*/}
                                                {/*                    </Grid>*/}
                                                {/*                </Grid>*/}
                                                {/*            </Grid>*/}
                                                {/*            <Grid item>*/}
                                                {/*                <Grid item container alignItems="center" justifyContent="space-between">*/}
                                                {/*                    <Grid item>*/}
                                                {/*                        <Typography variant="subtitle1">Allow Notifications</Typography>*/}
                                                {/*                    </Grid>*/}
                                                {/*                    <Grid item>*/}
                                                {/*                        <Switch*/}
                                                {/*                            checked={notification}*/}
                                                {/*                            onChange={(e) => setNotification(e.target.checked)}*/}
                                                {/*                            name="sdm"*/}
                                                {/*                            size="small"*/}
                                                {/*                        />*/}
                                                {/*                    </Grid>*/}
                                                {/*                </Grid>*/}
                                                {/*            </Grid>*/}
                                                {/*        </Grid>*/}
                                                {/*    </CardContent>*/}
                                                {/*</Card>*/}
                                                <List
                                                    component="nav"
                                                    sx={{
                                                        width: "100%",
                                                        maxWidth: 350,
                                                        minWidth: 300,
                                                        backgroundColor: theme.palette.background.paper,
                                                        borderRadius: "10px",
                                                        [theme.breakpoints.down("md")]: {
                                                            minWidth: "100%"
                                                        },
                                                        "& .MuiListItemButton-root": {
                                                            mt: 0.5
                                                        }
                                                    }}
                                                >
                                                    <ListItem>
                                                        <UserPreferencesDialog
                                                            buttonSx={{
                                                                borderRadius: `${customization.borderRadius}px`,
                                                                color: "text.primary"
                                                            }}
                                                        />
                                                    </ListItem>
                                                    <ListItemButton
                                                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                        selected={selectedIndex === 0}
                                                        onClick={(event) => handleListItemClick(event, 0, "/app/settings")}
                                                    >
                                                        <ListItemIcon>
                                                            <IconSettings stroke={1.5} size="1.3rem" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={<Typography variant="body2">Account Settings</Typography>} />
                                                    </ListItemButton>
                                                    {/*<ListItemButton*/}
                                                    {/*    sx={{ borderRadius: `${customization.borderRadius}px` }}*/}
                                                    {/*    selected={selectedIndex === 1}*/}
                                                    {/*    onClick={(event) => handleListItemClick(event, 1, "/user/social-profile/posts")}*/}
                                                    {/*>*/}
                                                    {/*    <ListItemIcon>*/}
                                                    {/*        <IconUser stroke={1.5} size="1.3rem" />*/}
                                                    {/*    </ListItemIcon>*/}
                                                    {/*    <ListItemText*/}
                                                    {/*        primary={*/}
                                                    {/*            <Grid container spacing={1} justifyContent="space-between">*/}
                                                    {/*                <Grid item>*/}
                                                    {/*                    <Typography variant="body2">Social Profile</Typography>*/}
                                                    {/*                </Grid>*/}
                                                    {/*                <Grid item>*/}
                                                    {/*                    <Chip*/}
                                                    {/*                        label="02"*/}
                                                    {/*                        size="small"*/}
                                                    {/*                        sx={{*/}
                                                    {/*                            bgcolor: theme.palette.warning.dark,*/}
                                                    {/*                            color: theme.palette.background.default*/}
                                                    {/*                        }}*/}
                                                    {/*                    />*/}
                                                    {/*                </Grid>*/}
                                                    {/*            </Grid>*/}
                                                    {/*        }*/}
                                                    {/*    />*/}
                                                    {/*</ListItemButton>*/}

                                                    <GoogleLogout
                                                        clientId={config.googleClientId}
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onLogoutSuccess}
                                                        render={(renderProps) => (
                                                            <ListItemButton
                                                                sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                                selected={selectedIndex === 4}
                                                                onClick={renderProps.onClick}
                                                            >
                                                                <ListItemIcon>
                                                                    <IconLogout stroke={1.5} size="1.3rem" />
                                                                </ListItemIcon>
                                                                <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                                            </ListItemButton>
                                                        )}
                                                    />
                                                </List>
                                            </Box>
                                        </MainCard>
                                    </ClickAwayListener>
                                </Paper>
                            </Transitions>
                        )}
                    </Popper>
                </>
            )}
        </StateHandler>
    );
};

export default ProfileSection;
