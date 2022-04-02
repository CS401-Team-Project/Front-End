import { useEffect } from "react";
import { Button, CardContent, CircularProgress, Stack, Typography } from "@mui/material";
import useApi from "hooks/useApi";
import testApi from "api/test";
import TestProfile from "./TestProfile";
import TestPost from "./TestPost";
import MainCard from "ui-component/cards/MainCard";

const ApiTest = () => {
    // This API simply returns a string
    const getTest = useApi(testApi.getTest);

    useEffect(() => {
        getTest.request();
    }, []);

    return (
        <Stack spacing={2}>
            <h1>API Client Tests</h1>
            <p>Base API URL: {process.env.REACT_APP_API_ENDPOINT}</p>

            <MainCard title="/test_get">
                <CardContent>
                    {getTest.loading && <CircularProgress />}
                    {!getTest.loading && <Typography>{getTest.data}</Typography>}
                </CardContent>
                <Button
                    variant="contained"
                    onClick={() => {
                        getTest.requestSlow();
                    }}
                >
                    Refresh
                </Button>
            </MainCard>

            <TestProfile />
            <TestPost />
        </Stack>
    );
};

export default ApiTest;
