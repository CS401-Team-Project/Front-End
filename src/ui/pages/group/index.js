import { Grid } from "@mui/material";

// project imports
import GroupInfo from "./components/GroupInfo";
import TransactionTable from "./components/TransactionTable";
import GroupBalanceSummary from "ui/pages/group/components/GroupBalanceSummary";
import GroupData from "ui/pages/group/old_data/GroupData";
// ==============================|| TYPOGRAPHY ||============================== //

const Group = () => {
    /*
    TODO: This component will need to take in certain props to be able to identify which group to display information for.
    One of these props should definitely be the group ID that needs to be used to query information from the API.
    Currently the group ID is passed as a query parameter in the URL bar.
    */

    /*
    TODO: We will need to use the group ID to query the API for the group information.
    !!! API CALL needs to be made in this component!!!
    The information received from the API will be stored in a state.
    The information in this state is what is going to be passed to the child components.
    */

    /*
    TODO: Pass whichever props are necessary to the corresponding child components such that they can perform their respective functions.
    Some might need to take in the GroupID (if they need to make API calls), others will only need to take certain other information.
    */

    /*
    TODO: The group summary cards need to be cleaned up according to the TODOs in their respective components.
    The group summary cards should also be less tall (they currently have unnecessary buttons and icons at the top).
    */

    const groupData = GroupData[0];
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <GroupBalanceSummary />
            </Grid>
            <Grid item xs={12} md={4}>
                <GroupInfo group={groupData} />
            </Grid>
            <Grid item xs={12}>
                <TransactionTable />
            </Grid>
        </Grid>
    );
};

export default Group;
