//This component will deal with state blocks

import { CircularProgress } from "@mui/material";
import ActionAlertError from "ui/components/ActionAlertError";
import PropTypes from "prop-types";
import NothingHere from "ui/components/NothingHere";

const StateHandler = ({ api, retryHandler, NoDataComponent, ...props }) => {
    console.log("DATA", api.data);
    console.log("ERROR", api.error);

    if (api.loading) {
        return <CircularProgress />;
    }

    if (api.error) {
        return <ActionAlertError msg={api.error} onRefresh={retryHandler} />;
    }

    if (!api.data) {
        return <NothingHere />;
    }

    return props.children;
};

StateHandler.propTypes = {
    api: PropTypes.oneOfType([PropTypes.object]),
    retryHandler: PropTypes.func,
    NoDataComponent: PropTypes.oneOfType([PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.object])
};

export default StateHandler;
