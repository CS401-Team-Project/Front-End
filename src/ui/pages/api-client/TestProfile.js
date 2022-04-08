import { useEffect } from "react";

// project imports
import MainCard from "ui/components/cards/MainCard";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";
import TableFromDictionary from "ui/components/TableFromDictionary";

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
                {userProfileApi.data && <TableFromDictionary dict={userProfileApi.data} maxDepth={3} />}
            </StateHandler>
        </MainCard>
    );
};

export default TestProfile;
