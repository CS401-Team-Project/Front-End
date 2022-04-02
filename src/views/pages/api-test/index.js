import { useEffect } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Divider, Stack, Typography } from "@mui/material";

import useApi from "hooks/useApi";
import testApi from "api/test";
import TestPost from "views/pages/api-test/TestPost";

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

            <Card variant="outlined" sx={{ maxWidth: 500 }}>
                <CardHeader title="/test_get" subheader="Test GET API Endpoint" />
                <Divider />
                <CardContent>
                    {getTest.loading && <CircularProgress />}
                    {!getTest.loading && <Typography>{getTest.data}</Typography>}
                </CardContent>
                <Divider />
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => {
                            getTest.requestSlow();
                        }}
                    >
                        Refresh
                    </Button>
                </CardActions>
            </Card>

            <TestPost />
        </Stack>
    );
};

export default ApiTest;
