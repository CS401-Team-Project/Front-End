// material-ui
import SubCard from "ui/components/cards/SubCard";
import { Stack } from "@mui/material";
import GroupCard from "ui/pages/groups/components/GroupCard";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";
import { useState, useEffect } from "react";

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
    const userProfileApi = useApi(userApi.getUser);
    const sub = store.getState().auth.Ba;

    useEffect(() => {
        userProfileApi.request(sub);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        userProfileApi.request(sub);
    };

    return (
        userProfileApi.data && (
            <SubCard title="My Groups" contentProps={{ component: Stack, spacing: 2 }}>
                <StateHandler api={userProfileApi} retryHandler={retry}>
                    {userProfileApi.data.data.groups.map((groupID) => (
                        <GroupCard key={groupID} ID={groupID} />
                    ))}
                </StateHandler>
            </SubCard>
        )
    );
};

export default GroupsList;
