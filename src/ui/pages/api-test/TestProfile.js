import { useEffect } from "react";

// project imports
import MainCard from "ui/components/cards/MainCard";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import NothingHere from "ui/components/NothingHere";
import { store } from "store/index";
import { Typography } from "@mui/material";

const TestProfile = () => {
    const user = useApi(userApi.getUser);
    const sub = store.getState().auth.Ba;

    useEffect(() => {
        user.request(sub);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        user.requestSlow(sub);
    };

    console.log(user.data);

    return (
        <MainCard title="/user/info">
            <StateHandler api={user} retryHandler={retry} NoDataComponent={NothingHere}>
                {user.data && <Typography>{user.data.email}</Typography>}
            </StateHandler>
        </MainCard>
    );
};

export default TestProfile;
