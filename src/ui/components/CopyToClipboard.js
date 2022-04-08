import copy from "clipboard-copy";
import PropTypes from "prop-types";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const CopyToClipboard = ({ text }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        copy(text).then((r) => {
            setCopied(true);
            // in 1 second reset the copied state
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
    };
    return (
        <IconButton color="primary" onClick={handleClick}>
            {copied ? <CheckIcon fontSize="inherit" /> : <ContentCopyIcon fontSize="inherit" />}
        </IconButton>
    );
};

CopyToClipboard.propTypes = {
    text: PropTypes.string.isRequired
};

export default CopyToClipboard;
