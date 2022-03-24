// material-ui
import { Grid, Button } from "@mui/material";
import SubCard from "ui-component/cards/SubCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const QuickAction = () => {
    return (
        <SubCard title="Quick Action">
            <Grid container justifyContent="center" spacing={3}>
                <Grid item>
                    <Button variant="contained">Add Expenses</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Remove Expenses</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Settle Expenses</Button>
                </Grid>
            </Grid>
        </SubCard>
    );
};

export default QuickAction;
