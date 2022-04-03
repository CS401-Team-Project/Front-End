import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Button } from "@mui/material";
//import TransactionData from "../TransactionData";
//import ItemData from "../ItemData";

function createData(title, date, amount, owed_by) {
    return {
        title,
        date,
        amount,
        owed_by,
        items: [
            {
                date: "03/25/22",
                Amount: "3.00",
                Item: "Milk x1",
                Receiver: "Person1"
            },
            {
                date: "03/25/22",
                Amount: "7.00",
                Item: "Spaghetti x6",
                Receiver: "Person2"
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.owed_by}</TableCell>
                <TableCell>
                    <Button variant="contained">Edit</Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Items
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Amount ($)</TableCell>
                                        <TableCell>Item</TableCell>
                                        <TableCell>Owed By</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.items.map((itemsRow) => (
                                        <TableRow key={itemsRow.date}>
                                            <TableCell>{itemsRow.Amount}</TableCell>
                                            <TableCell>{itemsRow.Item}</TableCell>
                                            <TableCell>{itemsRow.Receiver}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        date: PropTypes.number.isRequired,
        owed_by: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                Item: PropTypes.number.isRequired,
                Amount: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        title: PropTypes.string.isRequired
    }).isRequired
};

// These are the rows
const rows = [createData("Grocery Trip", "3/25/22", "10.00", "Jacob Leonard"), createData("Dinner", "3/25/22", "10.00", "Dian Martin")];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Transactions</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Total ($)</TableCell>
                        <TableCell>Owed</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.title} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
