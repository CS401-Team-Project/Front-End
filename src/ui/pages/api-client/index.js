import { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import useApi from "hooks/useApi";
import testApi from "api/test";
import TestProfile from "./TestProfile";
import TestPost from "./TestPost";
import MainCard from "ui/components/cards/MainCard";
import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";
import SubCard from "ui/components/cards/SubCard";
import CopyToClipboard from "ui/components/CopyToClipboard";
import TestDialogs from "ui/pages/api-client/TestDialogs";

const ApiClient = () => {
    // This API simply returns a string
    const getTest = useApi(testApi.getTest);
    const auth = store.getState().auth;

    useEffect(() => {
        getTest.request();
        // eslint-disable-next-line
    }, []);

    const load = () => {
        getTest.requestSlow();
    };

    return (
        <Stack spacing={2}>
            <MainCard title="Details" contentProps={{ component: Stack, spacing: 2 }}>
                <SubCard title="API URL">
                    <Typography>{process.env.REACT_APP_API_ENDPOINT}</Typography>
                </SubCard>
                <SubCard title="Auth Token" secondary={<CopyToClipboard text={auth.tokenId} />}>
                    <Typography>{auth.tokenId}</Typography>
                </SubCard>
            </MainCard>

            <TestDialogs />

            <TestProfile />

            <MainCard title="/test_get" contentProps={{ component: Stack, spacing: 2 }}>
                <StateHandler api={getTest} retryHandler={load}>
                    <Typography>{getTest.data}</Typography>
                </StateHandler>
                <Button variant="contained" onClick={load}>
                    Refresh
                </Button>
            </MainCard>

            <TestPost />
        </Stack>
    );
};

export default ApiClient;
