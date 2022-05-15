import { useState } from "react";
import BaseDialog from "ui/components/BaseDialog";
import { Stack } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { TextField } from "@mui/material";

import useApi from "hooks/useApi";
import groupApi from "api/group";

const JoinGroupDialog = ({ ...props }) => {
    const groupJoinApi = useApi(groupApi.joinGroup);

    const [groupId, setGroupId] = useState("");

    function updateId(event) {
        setGroupId(event.target.value);
    }

    const handleJoin = () => {
        console.log("[JoinGroupDialog] => handleJoin");
        if (groupId !== "") {
            groupJoinApi.request(groupId);
            return { success: true, message: "You have joined the group!" };
        } else {
            return { success: false, message: "ID required" };
        }
    };

    return (
        <BaseDialog name="Join Group" IconComponent={GroupIcon} actionButtons={{ Join: handleJoin }} {...props}>
            <Stack spacing={2}>
                <TextField
                    id="group-id"
                    label="Group ID"
                    onChange={updateId}
                    value={groupId}
                    variant="outlined"
                    required
                    helperText={groupId.length ? false : "Required"}
                    error={!groupId.length}
                />
            </Stack>
        </BaseDialog>
    );
};

export default JoinGroupDialog;
