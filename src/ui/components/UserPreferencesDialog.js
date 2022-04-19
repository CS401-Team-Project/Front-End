import BaseDialog from "ui/components/BaseDialog";
import { Stack, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const UserPreferencesDialog = ({ ...props }) => {
    const handleDone = () => {
        console.log("[UserPreferencesDialog] => handleDone");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        return { success: true, message: "Done" };
    };

    return (
        <BaseDialog name="User Preferences" IconComponent={SettingsIcon} actionButtons={{ Save: handleDone }} {...props}>
            <Stack spacing={2}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                    aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    ac turpis egestas.
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                    aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    ac turpis egestas.
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                    aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                    ac turpis egestas.
                </Typography>
            </Stack>
        </BaseDialog>
    );
};

export default UserPreferencesDialog;
