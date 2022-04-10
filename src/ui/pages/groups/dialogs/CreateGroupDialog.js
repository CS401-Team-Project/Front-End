import { useState } from "react";
import BaseDialog from "ui/components/BaseDialog";
import { Button, Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PropTypes from "prop-types";

import useApi from "hooks/useApi";
import groupApi from "api/group";

const InviteEntry = ({ ...props }) => {
    return (
        <Stack direction="row" spacing={0} alignItems="center">
            <Button
                color="error"
                style={{ width: "1%" }}
                size="large"
                fullWidth={false}
                startIcon={<RemoveCircleOutlineIcon />}
                onClick={props.rmFunc}
            />
            <TextField
                label="Invite Email"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={(event) => props.uptFunc(event.target.value)}
            />
        </Stack>
    );
};

InviteEntry.propTypes = {
    rmFunc: PropTypes.func.isRequired,
    uptFunc: PropTypes.func.isRequired
};

const CreateGroupDialog = ({ ...props }) => {
    const groupCreateApi = useApi(groupApi.createGroup);

    const [invites, setInvites] = useState([]);
    const [groupName, setGroupName] = useState("");
    const [groupDesc, setGroupDesc] = useState("");

    const handleCreate = () => {
        console.log("[CreateGroupDialog] => handleCreate");
        if (groupName !== "") {
            groupCreateApi.request(
                groupName,
                groupDesc,
                invites.map((item) => item.content)
            );
            return { success: true, message: "Group created" };
        } else {
            return { success: false, message: "Name required" };
        }
    };

    function addInvite() {
        setInvites((prevInvites) => {
            return [...prevInvites, { id: Math.random(), content: "" }];
        });
    }

    function removeInvite(id) {
        setInvites((prevInvites) => {
            return prevInvites.filter((invite) => invite.id !== id);
        });
    }

    function updateInvite(id, updateText) {
        setInvites(
            invites.map((item) => {
                return item.id === id ? { ...item, content: updateText } : item;
            })
        );
    }

    function updateName(event) {
        setGroupName(event.target.value);
    }

    function updateDesc(event) {
        setGroupDesc(event.target.value);
    }

    const inviteComponents = invites.map((item) => {
        return (
            <InviteEntry key={"invite" + item.id} rmFunc={() => removeInvite(item.id)} uptFunc={(text) => updateInvite(item.id, text)} />
        );
    });

    return (
        <div>
            <BaseDialog name="Create Group" IconComponent={GroupAddIcon} actionButtons={{ Create: handleCreate }} {...props}>
                <Box sx={{ width: 400 }}>
                    <Stack spacing={2}>
                        <TextField
                            id="group-name"
                            label="Group Name"
                            onChange={updateName}
                            value={groupName}
                            variant="outlined"
                            inputProps={{ maxLength: 60 }}
                            required
                            helperText={groupName.length ? false : "Required"}
                            error={!groupName.length}
                        />
                        <TextField
                            id="group-description"
                            label="Group Description"
                            onChange={updateDesc}
                            value={groupDesc}
                            multiline
                            rows={4}
                            inputProps={{ maxLength: 255 }}
                        />
                        <Divider />
                        {inviteComponents}
                        <Button startIcon={<AddCircleOutlineIcon />} onClick={addInvite}>
                            Add Invite
                        </Button>
                    </Stack>
                </Box>
            </BaseDialog>
        </div>
    );
};

export default CreateGroupDialog;
