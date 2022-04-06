//This component will deal with state blocks

import { CircularProgress } from "@mui/material";
import ActionAlertError from "ui/components/ActionAlertError";
import PropTypes from "prop-types";
import NothingHere from "ui/components/NothingHere";

const StateHandler = ({ api, retryHandler, NoDataComponent, ...props }) => {
    if (api.loading) {
        return <CircularProgress />;
    }

    if (api.error) {
        return <ActionAlertError msg={api.error} onRefresh={retryHandler} />;
    }

    if (!api.data) {
        if (NoDataComponent) return <NoDataComponent />;
        return <NothingHere />;
    }

    return props.children;
};

StateHandler.propTypes = {
    api: PropTypes.oneOfType([PropTypes.object]),
    retryHandler: PropTypes.func,
    NoDataComponent: PropTypes.elementType,
    children: PropTypes.oneOfType([PropTypes.object])
};

export default StateHandler;
