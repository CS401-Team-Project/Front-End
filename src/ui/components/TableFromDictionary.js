import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Alert, Chip, Stack, Table, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ArrowForwardIosNewIcon from "@mui/icons-material/ArrowForwardIosSharp";
import TableBody from "@mui/material/TableBody";

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0
    },
    "&:before": {
        display: "none"
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosNewIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

const TableFromDictionaryRec = ({ dict, depth, maxDepth }) => {
    // if subDict is not an object, return a simple cell

    if (typeof dict !== "object") {
        // check if the value is empty, and show a placeholder
        if (dict === "") {
            return <Alert severity="info">Empty</Alert>;
        }
        return dict;
    }

    if (depth >= maxDepth) {
        return <Typography>{JSON.stringify(dict)}</Typography>;
    }

    // if subDict is an object, return a table
    const keys = Object.keys(dict);
    // If the value is a dictionary, recurse
    const nonDict = keys.filter((k) => typeof dict[k] !== "object");
    const dicts = keys.filter((k) => typeof dict[k] === "object");
    return (
        <Stack>
            <TableContainer>
                <Table size="small">
                    <TableBody>
                        {nonDict.map((key) => (
                            <TableRow key={key}>
                                <TableCell>
                                    <Chip label={key} />
                                    {/*<Typography variant="h4">{key}</Typography>*/}
                                </TableCell>
                                <TableCell>
                                    {TableFromDictionaryRec({
                                        dict: dict[key],
                                        depth: depth + 1,
                                        maxDepth
                                    })}
                                </TableCell>
                            </TableRow>
                        ))}

                        {dicts.map((key) => (
                            <TableRow key={key} sx={{ p: 0 }}>
                                <TableCell>
                                    <Chip label={key} />
                                    {/*<Typography variant="h4">{key}</Typography>*/}
                                </TableCell>
                                <TableCell>
                                    <Accordion>
                                        <AccordionSummary>
                                            <Typography>Expand</Typography>
                                            {/*{Object.keys(dict[key]).map((k) => (*/}
                                            {/*    <Chip key={k} label={k} />*/}
                                            {/*))}*/}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {TableFromDictionaryRec({
                                                dict: dict[key],
                                                depth: depth + 1,
                                                maxDepth
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
};

const TableFromDictionary = ({ dict, maxDepth }) => {
    return <TableFromDictionaryRec dict={dict} depth={0} maxDepth={maxDepth} />;
};

TableFromDictionary.propTypes = {
    dict: PropTypes.object.isRequired,
    maxDepth: PropTypes.number.isRequired
};

TableFromDictionaryRec.propTypes = {
    dict: PropTypes.object.isRequired,
    depth: PropTypes.number.isRequired,
    maxDepth: PropTypes.number.isRequired
};

export default TableFromDictionary;
