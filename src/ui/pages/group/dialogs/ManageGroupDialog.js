import BaseDialog from "ui/components/BaseDialog";
import { Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const ManageGroupDialog = ({ ...props }) => {
    const handleSave = () => {
        console.log("[SettleBalancesDialog] => handleSave");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        return { success: true, message: "Group saved" };
    };

    return (
        <div>
            <BaseDialog name="Manage Group" IconComponent={InfoOutlinedIcon} actionButtons={{ Save: handleSave }} {...props}>
                <Stack spacing={2}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                        aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                        aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl libero
                        aliquet nunc, eu aliquam nunc nisi eu nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </Typography>
                </Stack>
            </BaseDialog>
        </div>
    );
};

export default ManageGroupDialog;
