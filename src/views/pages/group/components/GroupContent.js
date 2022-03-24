import PropTypes from "prop-types";

// material-ui
import { Grid, Button } from "@mui/material";
import SubCard from "./SubCard";
import GroupMembersList from "./GroupMembersList";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupContent = ({ title }) => {
    return (
        <SubCard title={title}>
            <Grid container>
                <Grid item>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                            <Button variant="contained">Edit Group</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <GroupMembersList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SubCard>
    );
};

GroupContent.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default GroupContent;
