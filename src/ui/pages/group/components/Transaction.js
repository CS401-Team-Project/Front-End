import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";

const Transaction = (id) => {
    const [open, setOpen] = React.useState(false);

    // TODO: Get this from API call
    const info = {
        title: "Transaction 1",
        desc: "This is a transaction description",
        date_purchased: "2020-01-01",
        date_created: "2020-01-02",
        created_by: "John Doe",
        date_modified: "2020-01-03",
        modified_by: "Jane Doe",
        total_price: 123.45,
        vendor: "Vendor 1",
        items: [
            {
                item_id: 123,
                person: "John Doe",
                name: "Item 1",
                quantity: 1,
                item_cost: 1.23
            },
            {
                item_id: 1234,
                person: "Jane Doe",
                name: "Item 2",
                quantity: 2,
                item_cost: 12.34
            },
            {
                item_id: 12345,
                person: "Johnny Doe",
                name: "Item 3",
                quantity: 3,
                item_cost: 123.45
            }
        ]
    };

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {info.title}
                </TableCell>
                <TableCell>{info.date_purchased}</TableCell>
                <TableCell>{info.vendor}</TableCell>
                <TableCell>{info.created_by}</TableCell>
                <TableCell>{info.total_price}</TableCell>
                <TableCell>
                    <Button variant="contained">Edit</Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Quantity</TableCell>

                                    <TableCell>Price ($)</TableCell>
                                    <TableCell>Owed By</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {info.items.map((item) => (
                                    <TableRow key={id + "_" + item.item_id}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.item_cost}</TableCell>
                                        <TableCell>{item.person}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};

Transaction.propTypes = {
    id: PropTypes.number.isRequired
};

export default Transaction;
