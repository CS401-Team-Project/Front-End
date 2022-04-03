import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";

const Transaction = (props) => {
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
};

Transaction.propTypes = {
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

export default Transaction;
