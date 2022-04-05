import { Alert, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import PropTypes from "prop-types";

const ActionAlertError = ({ msg, onRefresh }) => {
    return (
        <Alert
            severity="error"
            action={
                onRefresh && (
                    <IconButton aria-label="close" color="inherit" size="small" onClick={onRefresh}>
                        <RefreshIcon />
                    </IconButton>
                )
            }
        >
            {msg}
        </Alert>
    );
};

ActionAlertError.propTypes = {
    msg: PropTypes.oneOfType([PropTypes.string]),
    onRefresh: PropTypes.oneOfType([PropTypes.func])
};

export default ActionAlertError;
