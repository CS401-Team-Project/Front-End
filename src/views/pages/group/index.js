import { Grid } from "@mui/material";

// project imports
import GroupInformation from "./components/GroupInformation";
import QuickAction from "./components/QuickAction";
import TransactionTable from "./components/TransactionTable";

// ==============================|| TYPOGRAPHY ||============================== //

const Group = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <QuickAction />
            </Grid>
            <Grid item xs={6}>
                <GroupInformation />
            </Grid>
            <Grid item xs={12}>
                <TransactionTable />
            </Grid>
        </Grid>
    );
};

export default Group;
