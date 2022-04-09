//This component will deal with state blocks

import { CircularProgress } from "@mui/material";
import ActionAlertError from "ui/components/ActionAlertError";
import PropTypes from "prop-types";
import NothingHereBanner from "ui/components/NothingHereBanner";

const StateHandler = ({ api, children, retryHandler, Component, NoDataComponent }) => {
    const d = api.data;
    const e = api.error;
    const l = api.loading;

    if (l) {
        // console.log("StateHandler => Loading:", api);
        return <CircularProgress />;
    }

    if (e) {
        // console.log("StateHandler => Error:", api);
        return <ActionAlertError msg={e} onRefresh={retryHandler} />;
    }

    if (!d) {
        // console.log("StateHandler => NoData:", api);
        if (NoDataComponent) return <NoDataComponent />;
        return <NothingHereBanner />;
    }

    // console.log("StateHandler => OK:", api);
    if (Component) return <Component {...children} />;
    if (children) return children;
    return null;
};

StateHandler.propTypes = {
    api: PropTypes.oneOfType([PropTypes.object]).isRequired,
    children: PropTypes.oneOfType([PropTypes.object]),
    retryHandler: PropTypes.func,
    Component: PropTypes.oneOfType([PropTypes.object]),
    NoDataComponent: PropTypes.elementType
};

export default StateHandler;
