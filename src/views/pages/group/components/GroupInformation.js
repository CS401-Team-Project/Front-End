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
                            <Grid item xs={6}>
                                <Typography variant="body2"> Group ID: {values.id} </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2"> Group Size: {values.members.length} </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2"> Group Description: {values.description} </Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                );
            })}
        </>
    );
};

export default GroupInformation;
