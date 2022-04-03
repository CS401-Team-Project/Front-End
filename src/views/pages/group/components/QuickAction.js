// material-ui
import { Button, Grid } from "@mui/material";
import SubCard from "ui-component/cards/SubCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const QuickAction = () => {
    return (
        <SubCard title="Quick Action">
            <Grid container spacing={3}>
                <Grid item>
                    <Button variant="contained">Create Transaction</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Settle Balances</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Scan Receipt</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Group Profile</Button>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default QuickAction;
