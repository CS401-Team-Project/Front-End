import { useEffect } from "react";

// project imports
import MainCard from "ui/components/cards/MainCard";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";
import TableFromDictionary from "ui/components/TableFromDictionary";
import SubCard from "ui/components/cards/SubCard";
import TestPay from "ui/pages/api-client/TestPay";
import { Stack } from "@mui/material";

const TestProfile = () => {
    const userProfileApi = useApi(userApi.getUser, "data");
    const sub = store.getState().auth.Ba;

    useEffect(() => {
        userProfileApi.requestSlow(sub);
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        userProfileApi.requestSlow(sub);
    };

    return (
        <MainCard title="/user/info">
            <StateHandler api={userProfileApi} retryHandler={retry}>
                {userProfileApi.data && (
                    <Stack spacing={2}>
                        <TestPay user_profile={userProfileApi.data.data} />
                        <SubCard>
                            <TableFromDictionary dict={userProfileApi.data} maxDepth={3} />
                        </SubCard>
                    </Stack>
                )}
            </StateHandler>
        </MainCard>
    );
};

export default TestProfile;
