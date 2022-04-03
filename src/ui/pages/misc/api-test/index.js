import { useEffect } from "react";
import { Button, Stack, Typography } from "@mui/material";
import useApi from "hooks/useApi";
import testApi from "api/test";
import TestProfile from "./TestProfile";
import TestPost from "./TestPost";
import MainCard from "ui/components/cards/MainCard";
import StateHandler from "ui/components/StateHandler";

const ApiTest = () => {
    // This API simply returns a string
    const getTest = useApi(testApi.getTest);

    useEffect(() => {
        getTest.request();
        // eslint-disable-next-line
    }, []);

    const load = () => {
        getTest.requestSlow();
    };

    return (
        <Stack spacing={2}>
            <h1>API Client Tests</h1>
            <p>Base API URL: {process.env.REACT_APP_API_ENDPOINT}</p>

            <MainCard title="/test_get" component={Stack} component_props={{ spacing: 2 }}>
                <StateHandler api={getTest} retryHandler={load}>
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
