import { Alert } from "@mui/material";

const NothingHereBanner = ({ ...props }) => {
    return (
        <Alert severity="info" {...props}>
            Nothing here yet!
        </Alert>
    );
};

export default NothingHereBanner;
