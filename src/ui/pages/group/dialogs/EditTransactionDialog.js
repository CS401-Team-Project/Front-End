import BaseDialog from "ui/components/BaseDialog";
import { Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditTransactionDialog = ({ ...props }) => {
    const handleSave = () => {
        console.log("[EditTransactionDialog] => handleSave");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        return { success: true, message: "Transaction saved" };
    };

    return (
        <BaseDialog name="Edit Transaction" IconComponent={EditIcon} actionButtons={{ Save: handleSave }} {...props}>
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

export default EditTransactionDialog;
