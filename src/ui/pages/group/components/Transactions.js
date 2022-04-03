import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Transaction from "./Transaction";

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
                        <Transaction key={row.title} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
