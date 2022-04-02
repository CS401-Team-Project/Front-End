/*
    Here's an example of how to use this dialog component:

    You first need something to activate the dialog (using a React state). Note the arrow function: trying to wrap the setter function in another
    function resulted an infinite loop of rerendering.

    <Button variant="outlined" onClick={() => setDialogOpen(true)}>
        Open alert dialog
    </Button>

    Then you can create a dialog component.

    <ConfirmationDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        title="yee"
        onConfirm={testPos}
        onCancel={testNeg}
        positiveText="yea"
        negativeText="nah"
    >
        Hey, uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh yeah.
    </ConfirmationDialog>
*/

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function ConfirmationDialog(props) {
    const { title, children, positiveText, negativeText, open, setOpen, onConfirm, onCancel } = props;

    const handlePositive = () => {
        setOpen(false);
        onConfirm();
    };

    const handleNegative = () => {
        setOpen(false);
        onCancel();
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={handleNegative}>{negativeText}</Button>
                <Button onClick={handlePositive}>{positiveText}</Button>
            </DialogActions>
        </Dialog>
    );
}

ConfirmationDialog.propTypes = {
    title: PropTypes.string,
    children: PropTypes.string,
    positiveText: PropTypes.string,
    negativeText: PropTypes.string,
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
};
