import { Grid } from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "../../store/constant";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import Summary from "ui-component/cards/Summary";
import MainContent from "ui-component/cards/MainContent";

// ==============================|| TYPOGRAPHY ||============================== //

const Group = (props) => {
    console.log("props");
    console.log(props);
    return (
        <MainCard title="Group" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Summary></Summary>
                </Grid>
                <Grid item>
                    <MainContent title="Transactions"></MainContent>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Group;
