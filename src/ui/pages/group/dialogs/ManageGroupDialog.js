import { useState } from "react";
import { useEffect } from "react";
import BaseDialog from "ui/components/BaseDialog";
import { Button, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SubCard from "ui/components/cards/SubCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ShieldIcon from "@mui/icons-material/Shield";
import RefreshIcon from "@mui/icons-material/Refresh";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PropTypes from "prop-types";

import useApi from "hooks/useApi";
import userApi from "api/user";
import groupApi from "api/group";

import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";

const UserComponent = ({ ...props }) => {
    return (
        <Stack direction="row" alignItems="center">
            {props.adminUser ? (
                <Button
                    color="success"
                    style={{ width: "1%", backgroundColor: "transparent" }}
                    size="large"
                    fullWidth={false}
                    startIcon={<ShieldIcon />}
                    disableRipple
                />
            ) : (
                <Button
                    color="error"
                    style={{ width: "1%" }}
                    size="large"
                    fullWidth={false}
                    startIcon={props.isAdmin ? <RemoveCircleOutlineIcon /> : false}
                    disabled={!props.isAdmin}
                />
            )}
            <Typography>{props.username}</Typography>
        </Stack>
    );
};

UserComponent.propTypes = {
    username: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    adminUser: PropTypes.bool.isRequired
};

const ManageGroupDialog = ({ ...props }) => {
    const groupInfoApi = useApi(groupApi.getGroup, "data");
    const groupRefreshApi = useApi(groupApi.refreshID);
    const groupUpdateApi = useApi(groupApi.updateGroup);
    const groupRemoveMemberApi = useApi(groupApi.removeMember);
    const sub = store.getState().auth.Ba;

    const [isAdmin, setIsAdmin] = useState(false);

    const [groupName, setGroupName] = useState("DEFAULT GROUP NAME");
    const [groupDesc, setGroupDesc] = useState("DEFAULT GROUP DESCRIPTION");

    useEffect(() => {
        groupInfoApi.requestSlow(props.groupid);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        groupInfoApi.requestSlow(props.groupid);
    };

    useEffect(() => {
        if (groupInfoApi.data && sub) {
            setIsAdmin(groupInfoApi.data.data.admin == sub);
            setGroupName(groupInfoApi.data.data.name);
            setGroupDesc(groupInfoApi.data.data.desc);
        }
    }, [groupInfoApi.data, sub]);

    const handleUpdate = () => {
        console.log("[SettleBalancesDialog] => handleUpdate");
        // Return true to close the dialog or false to keep it open when the user clicks the corresponding button
        if (groupName !== "") {
            groupUpdateApi.request(props.groupid, {
                name: groupName,
                desc: groupDesc
            });
            return { success: true, message: "Group updated" };
        } else {
            return { success: false, message: "Name required" };
        }
    };

    const handleLeave = () => {
        console.log("[SettleBalancesDialog] => handleLeave");
        groupRemoveMemberApi.requestSlow(props.groupid, sub);
    };

    const handleDelete = () => {
        console.log("[SettleBalancesDialog] => handleDelete");
    };

    function updateName(event) {
        setGroupName(event.target.value);
    }

    function updateDesc(event) {
        setGroupDesc(event.target.value);
    }

    return (
        <StateHandler api={groupInfoApi} retryHandler={retry}>
            {groupInfoApi.data && (
                <BaseDialog
                    name="Manage Group"
                    IconComponent={InfoOutlinedIcon}
                    actionButtons={
                        isAdmin
                            ? { "Delete Group": handleDelete, Update: handleUpdate }
                            : {
                                  "Leave Group": handleLeave
                              }
                    }
                    {...props}
                >
                    <Stack minWidth={450} spacing={1}>
                        <SubCard
                            title="Group ID"
                            contentProps={{ component: Stack, alignItems: "center" }}
                            contentSX={{ p: 1.5 }}
                            headerSX={{ padding: 0 }}
                            secondary={
                                isAdmin ? (
                                    <Stack direction="row" alignItems="center">
                                        <IconButton
                                            color="success"
                                            size="large"
                                            fullWidth={false}
                                            onClick={() => {
                                                groupRefreshApi.requestSlow(props.groupid);
                                            }}
                                        >
                                            <RefreshIcon />
                                        </IconButton>
                                        <IconButton
                                            color="success"
                                            size="large"
                                            fullWidth={false}
                                            onClick={() => {
                                                navigator.clipboard.writeText(props.groupid);
                                            }}
                                        >
                                            <ContentCopyIcon />
                                        </IconButton>
                                    </Stack>
                                ) : (
                                    <IconButton
                                        color="success"
                                        size="large"
                                        fullWidth={false}
                                        onClick={() => {
                                            navigator.clipboard.writeText(props.groupid);
                                        }}
                                    >
                                        <ContentCopyIcon />
                                    </IconButton>
                                )
                            }
                        >
                            <Typography align="center" sx={{ fontWeight: "bold" }}>
                                {props.groupid}
                            </Typography>
                        </SubCard>
                        <SubCard title="Group Info" contentProps={{ component: Stack, spacing: 2 }} contentSX={{ p: 1.5 }}>
                            {isAdmin ? (
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
                            ) : (
                                <Typography>{groupName}</Typography>
                            )}
                            {isAdmin ? (
                                <TextField
                                    id="group-description"
                                    label="Group Description"
                                    onChange={updateDesc}
                                    value={groupDesc}
                                    multiline
                                    rows={4}
                                    inputProps={{ maxLength: 255 }}
                                />
                            ) : (
                                <Typography>{groupDesc}</Typography>
                            )}
                        </SubCard>
                        <SubCard title="Group Members" contentProps={{ component: Stack, spacing: 1 }} contentSX={{ p: 1.5 }}>
                            <UserComponent username="User 1" userid="asdasd" isAdmin={isAdmin} adminUser={true} />
                            <Divider light />
                            <UserComponent username="User 2" userid="asdasd" isAdmin={isAdmin} adminUser={false} />
                            <Divider light />
                            {isAdmin && (
                                <Button startIcon={<AddCircleOutlineIcon />} disabled={!isAdmin}>
                                    Invite Member
                                </Button>
                            )}
                        </SubCard>
                    </Stack>
                </BaseDialog>
            )}
        </StateHandler>
    );
};

ManageGroupDialog.propTypes = {
    groupid: PropTypes.string.isRequired
};

export default ManageGroupDialog;
