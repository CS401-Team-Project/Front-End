// project imports
import MainCard from "ui/components/cards/MainCard";
import CreateGroupDialog from "ui/pages/groups/dialogs/CreateGroupDialog";
import JoinGroupDialog from "ui/pages/groups/dialogs/JoinGroupDialog";
import AddTransactionDialog from "ui/pages/group/dialogs/AddTransactionDialog";
import EditTransactionDialog from "ui/pages/group/dialogs/EditTransactionDialog";
import ManageGroupDialog from "ui/pages/group/dialogs/ManageGroupDialog";
import UserPreferencesDialog from "../../components/UserPreferencesDialog";
import { Grid } from "@mui/material";

const TestDialogs = () => {
    return (
        <MainCard title="Test Dialogs">
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={2}>
                    <Grid item>
                        <CreateGroupDialog />
                    </Grid>
                    <Grid item>
                        <JoinGroupDialog />
                    </Grid>
                    <Grid item>
                        <ManageGroupDialog groupid="6281dca426305f1dcef068a4" />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <Grid item>
                        <AddTransactionDialog />
                    </Grid>
                    <Grid item>
                        <EditTransactionDialog />
                    </Grid>
                    <Grid item>
                        <UserPreferencesDialog />
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default TestDialogs;
