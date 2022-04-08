import { Button } from "@mui/material";
import copy from "clipboard-copy";
import PropTypes from "prop-types";

const CopyToClipboard = ({ text }) => {
    return (
        <Button variant="contained" color="primary" onClick={() => copy(text)}>
            Copy
        </Button>
    );
};

CopyToClipboard.propTypes = {
    text: PropTypes.string.isRequired
};

export default CopyToClipboard;
