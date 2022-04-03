import PropTypes from "prop-types";

// material-ui
import { Button, Grid } from "@mui/material";
import SubCard from "./SubCard";
import GroupMembersList from "./GroupMembersList";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupMembers = () => {
    return (
        <>
            <SubCard title="Group Members">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={3.5}>
                                <Button variant="contained">Leave Group</Button>
                            </Grid>
                            <Grid item xs={3.5}>
                                <Button variant="contained">Edit Group</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <GroupMembersList />
                    </Grid>
                </Grid>
            </SubCard>
        </>
    );
};

GroupMembers.propTypes = {
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default GroupMembers;
