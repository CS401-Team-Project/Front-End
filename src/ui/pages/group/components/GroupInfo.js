// material-ui
import PropTypes from "prop-types";

import { Stack, Typography } from "@mui/material";
import SubCard from "ui/components/cards/SubCard";
import ManageGroupDialog from "ui/pages/group/dialogs/ManageGroupDialog";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupInfo = ({ group }) => {
    console.log(group);
    return (
        <SubCard title="Group Info" contentProps={{ component: Stack, spacing: 2, textAlign: "center" }} secondary={<ManageGroupDialog />}>
            <Typography>{group.description}</Typography>
            {/* Map the group members to chips */}
            <Typography variant="subtitle1">Members: {group.members.length}</Typography>
        </SubCard>
    );
};

GroupInfo.propTypes = {
    group: PropTypes.object.isRequired
};
export default GroupInfo;
