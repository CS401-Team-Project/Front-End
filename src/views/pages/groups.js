// project imports
import MainCard from "ui-component/cards/MainCard";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <MainCard title="My Groups" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Summary></Summary>
                </Grid>
                <Grid item>
                    <MainContent title="Joined Groups"></MainContent>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Groups;
