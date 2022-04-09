// project imports
import OverallBalanceSummary from "ui/pages/groups/components/OverallBalanceSummary";
import { Grid } from "@mui/material";
import GroupsList from "ui/pages/groups/components/GroupsList";
import QuickAction from "ui/pages/groups/components/QuickAction";

// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <OverallBalanceSummary />
            </Grid>
            <Grid item xs={12} md={4}>
                <QuickAction />
            </Grid>
            <Grid item xs={12}>
                <GroupsList />
            </Grid>
        </Grid>
    );
};

export default Groups;
