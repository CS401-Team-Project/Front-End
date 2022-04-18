import BaseDialog from "ui/components/BaseDialog";
import { Stack, Typography } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";

const JoinGroupDialog = ({ ...props }) => {
    const handleJoin = () => {
        console.log("[JoinGroupDialog] => handleJoin");

        return { success: true, message: "You have joined the group!" };
    };

    return (
        <BaseDialog name="Join Group" IconComponent={GroupIcon} actionButtons={{ Join: handleJoin }} {...props}>
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

export default JoinGroupDialog;
