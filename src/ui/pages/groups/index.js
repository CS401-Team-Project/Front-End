// project imports
import OverallSummary from "ui/pages/groups/components/OverallSummary";
import { Grid } from "@mui/material";
import GroupsList from "ui/pages/groups/components/GroupsList";

// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <OverallSummary />
            </Grid>
            <Grid item xs={12}>
                <GroupsList />
            </Grid>
        </Grid>
    );
};

export default Groups;
