import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    CircularProgress,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import useApi from "hooks/useApi";
import testApi from "api/test";

const TestPost = () => {
    // This API performs an operation between two numbers
    // Parameters: n1, n2, op
    // Supported ops: add, sub, mul, div
    const calcApi = useApi(testApi.postTest);
    const [calcState, setCalcState] = useState({
        n1: 0,
        n2: 0,
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

    return (
        <Card variant="outlined" sx={{ maxWidth: 500 }}>
            <CardHeader title="/test_post" subheader="Test POST API Endpoint" />
            <CardContent component={Stack} spacing={2}>
                <Paper variant="outlined" sx={{ p: 1 }}>
                    <Typography variant="h4" p={2}>
                        States:
                    </Typography>
                    <Box textAlign="center">
                        <Chip label={"N1: " + calcState.n1} />
                        <Chip label={"N2: " + calcState.n2} />
                        <Chip label={"OP: " + calcState.op} />
                    </Box>
                </Paper>

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

                {calcApi.loading && <CircularProgress />}
                {calcApi.data && <Typography>{calcApi.data}</Typography>}
            </CardContent>

            <CardActions>
                <Button
                    variant="contained"
                    onClick={() => {
                        calcApi.request(calcState.n1, calcState.n2, calcState.op);
                    }}
                >
                    Get Answer
                </Button>
            </CardActions>
        </Card>
    );
};

export default TestPost;
