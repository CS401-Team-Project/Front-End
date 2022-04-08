import AddIcon from "@mui/icons-material/Add";
import BaseDialog from "ui/components/BaseDialog";
import { Stack, Typography } from "@mui/material";

const AddTransactionDialog = () => {
    const handleAdd = () => {
        console.log("[AddTransactionDialog] => handleAdd");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        return { success: true, message: "Transaction added" };
    };

    return (
        <div>
            <BaseDialog name="Add Transaction" IconComponent={AddIcon} actionButtons={{ Add: handleAdd }}>
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

export default AddTransactionDialog;
