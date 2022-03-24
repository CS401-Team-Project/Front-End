import { Grid } from "@mui/material";

// project imports
import Summary from "./components/Summary";
import GroupContent from "./components/GroupContent";
import QuickAction from "./components/QuickAction";
import Transactions from "./components/Transactions";

// ==============================|| TYPOGRAPHY ||============================== //

const Group = () => {
    return (
        <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={8.8}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <Summary />
                    </Grid>
                    <Grid item xs={12}>
                        <QuickAction />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3.2}>
                <GroupContent title="Group Members"></GroupContent>
            </Grid>
            <Grid item xs={12}>
                <Transactions />
            </Grid>
        </Grid>
    );
};

export default Group;
