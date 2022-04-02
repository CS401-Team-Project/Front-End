// material-ui
import { Grid, Typography } from "@mui/material";
import SubCard from "./SubCard";
import GroupData from "../GroupData";

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
