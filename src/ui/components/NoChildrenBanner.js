import { Alert } from "@mui/material";

const NoChildrenBanner = ({ ...props }) => {
    return (
        <Alert severity="warning" {...props}>
            No children in this component.
        </Alert>
    );
};

export default NoChildrenBanner;
