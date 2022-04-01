import { Grid } from "@mui/material";

// project imports
import { gridSpacing } from "store/constant";
import Summary from "ui-component/cards/Summary";
import MainContent from "ui-component/cards/MainContent";

// ==============================|| TYPOGRAPHY ||============================== //

const Group = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item>
                <Summary />
            </Grid>
            <Grid item>
                <MainContent title="Transactions" />
            </Grid>
        </Grid>
    );
};

export default Group;
