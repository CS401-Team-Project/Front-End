import { Grid } from "@mui/material";

// project imports
import GroupInformation from "./components/GroupInformation";
//import GroupMembers from "./components/GroupMembers";
import QuickAction from "./components/QuickAction";
import Transactions from "./components/Transactions";

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
                <Transactions />
            </Grid>
        </Grid>
    );
};

export default Group;
