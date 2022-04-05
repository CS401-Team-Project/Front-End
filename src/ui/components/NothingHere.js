import { Alert } from "@mui/material";

const NothingHere = ({ ...props }) => {
    return (
        <Alert severity="info" {...props}>
            Nothing here yet!
        </Alert>
    );
};

export default NothingHere;
