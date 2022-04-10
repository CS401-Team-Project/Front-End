import { useEffect } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import useApi from "hooks/useApi";
import testApi from "api/test";
import MainCard from "ui/components/cards/MainCard";
import StateHandler from "ui/components/StateHandler";
import { store } from "store/index";
import SubCard from "ui/components/cards/SubCard";
import CopyToClipboard from "ui/components/CopyToClipboard";
import TestDialogs from "ui/pages/api-client/TestDialogs";
import { RefreshRounded } from "@mui/icons-material";

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
                <SubCard
                    title={"API"}
                    secondary={
                        <IconButton variant="contained" onClick={load}>
                            <RefreshRounded color="primary" />
                        </IconButton>
                    }
                    contentProps={{ component: Stack, spacing: 2 }}
                >
                    <Stack direction="row" spacing={1}>
                        <Typography>URL:</Typography>
                        <Typography>{process.env.REACT_APP_API_ENDPOINT}</Typography>
                    </Stack>
                    <StateHandler api={getTest} retryHandler={load}>
                        <Stack direction="row" spacing={1}>
                            <Typography>Response:</Typography>
                            <Typography>{getTest.data}</Typography>
                        </Stack>
                    </StateHandler>
                </SubCard>
                <SubCard title="Auth Token" secondary={<CopyToClipboard text={auth.tokenId} />}>
                    <Typography>{auth.tokenId}</Typography>
                </SubCard>
            </MainCard>

            <TestDialogs />
        </Stack>
    );
};

export default ApiClient;
