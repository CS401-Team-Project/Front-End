// material-ui
import SubCard from "ui/components/cards/SubCard";
import YouOweCard from "ui/components/cards/summary/YouOweCard";
import YouLentCard from "ui/components/cards/summary/YouLentCard";
import BalanceCard from "ui/components/cards/summary/BalanceCard";
import { Grid, Stack } from "@mui/material";

// ==============================|| CUSTOM SUB CARD ||============================== //

const OverallBalanceSummary = () => {
    /*
    Will display the overall summary of the user.
    These are totals for the user's account (balance, loans, and debts).
    You should not need to query each group individually for this and perform any operations.
    The back-end should handle this for you and provide you the information needed for the totals in a single call.
    Check which API will give you the data you need.
    */
    return (
        <SubCard title="Overall Balance Summary" contentProps={{ component: Stack, spacing: 2, direction: "row" }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <BalanceCard />
                </Grid>
                <Grid item xs={4}>
                    <YouOweCard />
                </Grid>
                <Grid item xs={4}>
                    <YouLentCard />
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default OverallBalanceSummary;
