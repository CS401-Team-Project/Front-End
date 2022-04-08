import { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import useApi from "hooks/useApi";
import testApi from "api/test";
import TestProfile from "./TestProfile";
import TestPost from "./TestPost";
import MainCard from "ui/components/cards/MainCard";
import StateHandler from "ui/components/StateHandler";
import NothingHere from "ui/components/NothingHere";
import { store } from "store/index";
import SubCard from "ui/components/cards/SubCard";
import CopyToClipboard from "ui/components/CopyToClipboard";

const ApiTest = () => {
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
            <MainCard title="API Details" contentProps={{ component: Stack, spacing: 2 }}>
                <SubCard title="API URL">
                    <Typography>{process.env.REACT_APP_API_ENDPOINT}</Typography>
                </SubCard>
                <SubCard title="Auth Token">
                    <Typography>{auth.tokenId}</Typography>
                    <CopyToClipboard text={auth.tokenId} />
                </SubCard>
            </MainCard>

            <MainCard title="/test_get" contentProps={{ component: Stack, spacing: 2 }}>
                <StateHandler api={getTest} retryHandler={load} NoDataComponent={NothingHere}>
                    <Typography>{getTest.data}</Typography>
                </StateHandler>
                <Button variant="contained" onClick={load}>
                    Refresh
                </Button>
            </MainCard>

            <TestProfile />
            <TestPost />
        </Stack>
    );
};

export default ApiTest;
