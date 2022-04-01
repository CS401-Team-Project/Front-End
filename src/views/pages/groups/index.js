// project imports
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import Summary from "ui-component/cards/Summary";
import MainContent from "ui-component/cards/MainContent";
// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item>
                <Summary />
            </Grid>
            <Grid item>
                <MainContent title="Joined Groups" />
            </Grid>
        </Grid>
    );
};

export default Groups;
