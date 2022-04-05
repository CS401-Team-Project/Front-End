import { Alert } from "@mui/material";
import PropTypes from "prop-types";

const NothingHere = ({ msg, ...props }) => {
    return <Alert severity="info">Nothing here yet!</Alert>;
};
NothingHere.propTypes = {
    msg: PropTypes.oneOfType([PropTypes.string])
};
export default NothingHere;
