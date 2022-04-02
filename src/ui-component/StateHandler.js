//This component will deal with state blocks
import { Alert, CircularProgress, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import RefreshIcon from "@mui/icons-material/Refresh";
const StateHandler = ({ apiState, retryHandler, ...props }) => {
    if (apiState.loading) {
        return <CircularProgress />;
    }
    if (apiState.error) {
        return (
            <Alert
                severity="error"
                action={
                    retryHandler && (
                        <IconButton aria-label="close" color="inherit" size="small" onClick={retryHandler}>
                            <RefreshIcon />
                        </IconButton>
                    )
                }
            >
                {apiState.error}
            </Alert>
        );
    }
    if (apiState.data === null) {
        return <Alert severity="info">Nothing here yet!</Alert>;
    }
    return props.children;
};

StateHandler.propTypes = {
    apiState: PropTypes.oneOfType([PropTypes.object]),
    retryHandler: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.object])
};

export default StateHandler;
