// material-views
import { Grid, Typography } from "@mui/material";
import GroupData from "../GroupData";
import SubCard from "ui-component/cards/SubCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupInformation = () => {
    return (
        <>
            {GroupData.map((values) => {
                return (
                    <SubCard key={values.id} title="Group Description">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="body2"> {values.description} </Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                );
            })}
        </>
    );
};

export default GroupInformation;
