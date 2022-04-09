// material-ui
import SubCard from "ui/components/cards/SubCard";
import { Stack } from "@mui/material";
import CreateGroupDialog from "ui/pages/groups/dialogs/CreateGroupDialog";
import JoinGroupDialog from "ui/pages/groups/dialogs/JoinGroupDialog";

// ==============================|| CUSTOM SUB CARD ||============================== //

const QuickAction = () => {
    return (
        <SubCard title="Quick Actions" contentProps={{ component: Stack, spacing: 2, textAlign: "center" }}>
            <CreateGroupDialog />
            <JoinGroupDialog />
        </SubCard>
    );
};

export default QuickAction;
