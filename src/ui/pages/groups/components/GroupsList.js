// material-ui
import SubCard from "ui/components/cards/SubCard";
import { Stack } from "@mui/material";
import GroupCard from "ui/pages/groups/components/GroupCard";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupsList = () => {
    /*
    TODO: Add any necessary props to get information from the parent.
    Use the map function to create a list of GroupCard components (this will create one card for each item in the list of groups).
    Pass any necessary state information to the GroupCard components as props to be able to display their information
    */

    /*
    TODO: If any API calls are made to get respective group information, they should likely not be made in this component.
     Instead, they should be made in the GroupCard component based on the Group's ID.
    */
    return (
        <SubCard title="Groups List" contentProps={{ component: Stack, spacing: 2 }}>
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </SubCard>
    );
};

export default GroupsList;
