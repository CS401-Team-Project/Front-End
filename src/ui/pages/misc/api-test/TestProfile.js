import { useEffect } from "react";

// project imports
import MainCard from "ui/components/cards/MainCard";
import useApi from "hooks/useApi";
import userApi from "api/user";
import StateHandler from "ui/components/StateHandler";

const TestProfile = () => {
    const user = useApi(userApi.user_info);

    useEffect(() => {
        user.request("token", "sub");
        // eslint-disable-next-line
    }, []);

    const retry = () => {
        user.requestSlow("token", "sub");
    };

    return (
        <MainCard title="/user/info">
            <StateHandler api={user} retryHandler={retry}>
                {/*<Typography variant="body2">Email: {user.data.email}</Typography>*/}
            </StateHandler>
        </MainCard>
    );
};

export default TestProfile;
