import { useState } from "react";
import { Box, Button, Chip, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";

import useApi from "hooks/useApi";
import testApi from "api/test";
import { styled } from "@mui/material/styles";
import StateHandler from "ui-component/StateHandler";
import MainCard from "../../../ui-component/cards/MainCard";
import SubCard from "../../../ui-component/cards/SubCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const TestPost = () => {
    // This API performs an operation between two numbers
    // Parameters: n1, n2, op
    // Supported ops: add, sub, mul, div
    const calcApi = useApi(testApi.postTest);
    const [calcState, setCalcState] = useState({
        n1: "",
        n2: "",
        op: "add"
    });

    const handleTextInputChange = (event) => {
        console.log("handleTextInputChange:", event.target);
        const value = event.target.value;
        setCalcState({
            ...calcState,
            [event.target.name]: value
        });
        console.log("calcState:", calcState);
    };

    const makeRequest = () => {
        // Note: this artificially delays the response, to demonstrate the use of the StateHandler with Loading state
        calcApi.requestSlow(calcState.n1, calcState.n2, calcState.op);
    };

    return (
        <MainCard title="/test_post">
            <SubCard variant="outlined" sx={{ p: 1 }}>
                <Typography variant="h4" p={2}>
                    States:
                </Typography>
                <Box textAlign="center">
                    <Chip label={"N1: " + calcState.n1} />
                    <Chip label={"N2: " + calcState.n2} />
                    <Chip label={"OP: " + calcState.op} />
                </Box>
            </SubCard>

            <Paper variant="outlined" sx={{ p: 1 }}>
                <Typography variant="h4" p={2}>
                    Inputs:
                </Typography>
                <Stack spacing={2} direction="row">
                    <TextField
                        required
                        type="number"
                        name="n1"
                        label="n1"
                        variant="outlined"
                        onChange={handleTextInputChange}
                        value={calcState.n1}
                    />
                    <Select
                        labelId="op"
                        name="op"
                        value={calcState.op}
                        label="Operation"
                        onChange={handleTextInputChange}
                        sx={{ width: 300 }}
                    >
                        <MenuItem value="add">Addition</MenuItem>
                        <MenuItem value="sub">Subtraction</MenuItem>
                        <MenuItem value="mul">Multiplication</MenuItem>
                        <MenuItem value="div">Division</MenuItem>
                        <MenuItem value="invalid">Invalid</MenuItem>
                    </Select>
                    <TextField
                        required
                        type="number"
                        name="n2"
                        label="n2"
                        variant="outlined"
                        onChange={handleTextInputChange}
                        value={calcState.n2}
                    />
                </Stack>
            </Paper>
            <Paper variant="outlined" sx={{ p: 1 }}>
                <Typography variant="h4" p={2}>
                    Result:
                </Typography>
                <Stack justifyContent="center">
                    <Item>
                        <StateHandler api={calcApi} retryHandler={makeRequest}>
                            <Chip label={calcState.n1 + " " + calcState.op + " " + calcState.n2 + " = " + calcApi.data} />
                        </StateHandler>
                    </Item>
                </Stack>
            </Paper>
            <Button variant="contained" onClick={makeRequest}>
                Get Answer
            </Button>
        </MainCard>
    );
};

export default TestPost;
