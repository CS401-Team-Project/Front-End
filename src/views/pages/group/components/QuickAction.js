// material-ui
import { Grid, Button } from "@mui/material";
import SubCard from "./SubCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const QuickAction = () => {
    return (
        <SubCard title="Quick Action">
            <Grid container spacing={3}>
                <Grid item container spacing={3}>
                    <Grid item>
                        <Button variant="contained">Create Expenses</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Update Expenses</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Remove Expenses</Button>
                    </Grid>
                </Grid>
                <Grid item container columnSpacing={3.5}>
                    <Grid item>
                        <Button variant="contained">Settle Expenses</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Scan Receipt</Button>
                    </Grid>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default QuickAction;
