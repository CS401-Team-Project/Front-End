import * as React from "react";
import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackBar = ({ open, severity, message }) => {
    const [isOpen, setOpen] = React.useState(open);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        setOpen(open);
    }, [open]);

    console.log("CustomSnackBar", isOpen);
    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

CustomSnackBar.propTypes = {
    open: PropTypes.bool.isRequired,
    severity: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default CustomSnackBar;
