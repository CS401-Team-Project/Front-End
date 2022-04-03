//This component will deal with state blocks
import { Alert, CircularProgress, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ErrorBoundary } from "react-error-boundary";

const StateHandler = ({ api, retryHandler, noDataComponent, ...props }) => {
    if (api.loading) {
        return <CircularProgress />;
    }
    if (api.error) {
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
                {api.error}
            </Alert>
        );
    }
    if (api.data === null && noDataComponent) {
        return noDataComponent;
    }

    return <ErrorBoundary>{props.children}</ErrorBoundary>;
};

StateHandler.propTypes = {
    api: PropTypes.oneOfType([PropTypes.object]),
    retryHandler: PropTypes.func,
    noDataComponent: PropTypes.oneOfType([PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.object])
};

export default StateHandler;
