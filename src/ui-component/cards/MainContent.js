import PropTypes from "prop-types";

// material-views
import { Grid, Typography } from "@mui/material";
import SubCard from "./SubCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const MainContent = ({ title }) => {
    return (
        <SubCard title={title}>
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                        alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                        Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                        cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
                    </Typography>
                </Grid>
            </Grid>
        </SubCard>
    );
};

MainContent.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MainContent;
