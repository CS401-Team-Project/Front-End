import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Transaction from "./Transaction";
import SubCard from "ui/components/cards/SubCard";
import AddTransactionDialog from "ui/pages/group/dialogs/AddTransactionDialog";

const TransactionTable = (ids) => {
    ids = [1, 2, 3, 4, 5];

    return (
        <SubCard title="Transactions" secondary={<AddTransactionDialog />}>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Vendor</TableCell>
                            <TableCell>Purchaser</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ids.map((id) => (
                            <Transaction key={id} id={id} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </SubCard>
    );
};

export default TransactionTable;
