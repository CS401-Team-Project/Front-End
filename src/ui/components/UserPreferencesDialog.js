import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/system";
import BaseDialog from "ui/components/BaseDialog";
import { Stack } from "@mui/material";
import { IconSettings } from "@tabler/icons";
import { store } from "store/index";
import { TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";

import ConfirmationDialog from "./ConfirmationDialog";

import useApi from "hooks/useApi";
import userApi from "api/user";

import StateHandler from "ui/components/StateHandler";

const UserPreferencesDialog = ({ ...props }) => {
    const userDeleteApi = useApi(userApi.deleteUser);
    const userUpdateApi = useApi(userApi.updateUser);
    const userProfileApi = useApi(userApi.getUser);
    const sub = store.getState().auth.Ba;

    const [services, setServices] = useState({});
    const [confDialogOpen, setConfDialogOpen] = useState(false);

    useEffect(() => {
        userProfileApi.requestSlow(sub);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        userProfileApi.requestSlow(sub);
    };

    useEffect(() => {
        if (userProfileApi.data) {
            setServices(userProfileApi.data.data.pay_with);
        }
    }, [userProfileApi.data]);

    const handleDone = () => {
        console.log("[UserPreferencesDialog] => handleDone");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        userUpdateApi.request({ pay_with: services });
        return { success: true, message: "Done" };
    };

    function updateVenmo(event) {
        setServices((prevServices) => {
            return {
                ...prevServices,
                venmo: event.target.value
            };
        });
    }

    function updateCashapp(event) {
        setServices((prevServices) => {
            return {
                ...prevServices,
                cashapp: event.target.value
            };
        });
    }

    function updatePaypal(event) {
        setServices((prevServices) => {
            return {
                ...prevServices,
                paypal: event.target.value
            };
        });
    }

    function updatePreferred(event) {
        setServices((prevServices) => {
            return {
                ...prevServices,
                preferred: event.target.value
            };
        });
    }

    function deleteAccount() {
        userDeleteApi.request();
    }

    const buttonIcon = () => <IconSettings stroke={1.5} size="1.3rem" />;

    return (
        <BaseDialog
            name="User Preferences"
            IconComponent={buttonIcon}
            buttonVarient="text"
            actionButtons={{ Save: handleDone }}
            typographyWeight="400"
            {...props}
        >
            <Box sx={{ width: 400 }}>
                <StateHandler api={userProfileApi} retryHandler={retry}>
                    {userProfileApi.data && (
                        <Stack spacing={2}>
                            <TextField
                                id="venmo-username"
                                label="Venmo Username"
                                onChange={updateVenmo}
                                value={services.venmo}
                                variant="outlined"
                            />
                            <TextField
                                id="cashapp-username"
                                label="Cash App Username"
                                onChange={updateCashapp}
                                value={services.cashapp}
                                variant="outlined"
                            />
                            <TextField
                                id="venmo-username"
                                label="Venmo Username"
                                onChange={updatePaypal}
                                value={services.paypal}
                                variant="outlined"
                            />
                            <Select
                                labelId="preferred"
                                id="preferred"
                                value={services.preferred}
                                label="Preferred Payment Service"
                                onChange={updatePreferred}
                            >
                                <MenuItem value={""}>None</MenuItem>
                                <MenuItem value={"cashapp"}>Cash App</MenuItem>
                                <MenuItem value={"paypal"}>PayPal</MenuItem>
                                <MenuItem value={"venmo"}>Venmo</MenuItem>
                            </Select>
                            <Button variant="contained" color="error" onClick={() => setConfDialogOpen(true)}>
                                Delete Account
                            </Button>
                            <ConfirmationDialog
                                open={confDialogOpen}
                                setOpen={setConfDialogOpen}
                                title="Delete Account"
                                onConfirm={deleteAccount}
                                onCancel={() => {
                                    console.log("Deletion Cancelled!");
                                }}
                                positiveText="Confirm"
                                negativeText="Cancel"
                            >
                                Are you sure you would like to delete your account? This is irreversible.
                            </ConfirmationDialog>
                        </Stack>
                    )}
                </StateHandler>
            </Box>
        </BaseDialog>
    );
};

export default UserPreferencesDialog;
