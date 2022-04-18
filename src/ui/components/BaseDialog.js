import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import PropTypes from "prop-types";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import { Alert, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { withStyles } from "@mui/styles";
import Snackbar from "@mui/material/Snackbar";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(3)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(2),
        color: theme.palette.text.secondary
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle className={classes.root} {...other}>
            <Typography fontWeight="bold" variant="h4">
                {children}
            </Typography>
            {onClose ? (
                <IconButton className={classes.closeButton} onClick={onClose} size="medium">
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 2,
        padding: theme.spacing(2)
    }
}))(MuiDialogActions);

const BaseDialog = ({ name, IconComponent, actionButtons, iconOnly, ...props }) => {
    // const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [snackbarState, setSnackbarState] = useState({
        message: "",
        severity: "success",
        open: false
    });

    const handleDialogOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };

    const handleSnackbarClose = () => {
        setSnackbarState({
            ...snackbarState,
            open: false
        });
    };

    const handleButtonAction = (callback) => {
        const { success, message } = callback();
        if (success) {
            setSnackbarState({
                open: true,
                severity: "success",
                message: message
            });
            handleDialogClose();
        } else {
            setSnackbarState({
                open: true,
                severity: "error",

                message: message
            });
        }
    };

    return (
        <div>
            {iconOnly ? (
                <IconButton onClick={handleDialogOpen}>
                    {
                        <IconComponent
                        // sx={{ color: theme.palette.primary.contrastText }}
                        />
                    }
                </IconButton>
            ) : (
                <Button variant="outlined" onClick={handleDialogOpen} startIcon={<IconComponent />}>
                    {name}
                </Button>
            )}

            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle onClose={handleDialogClose}>{name}</DialogTitle>
                <DialogContent dividers>
                    <div>{props.children}</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    {Object.keys(actionButtons).map((key) => (
                        <Button variant="contained" key={key} onClick={() => handleButtonAction(actionButtons[key])}>
                            {key}
                        </Button>
                    ))}
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarState.open}
                autoHideDuration={1000}
                onClose={handleSnackbarClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarState.severity}>
                    {snackbarState.message}
                </Alert>
            </Snackbar>
        </div>
    );
};
BaseDialog.propTypes = {
    name: PropTypes.string.isRequired,
    IconComponent: PropTypes.oneOfType([PropTypes.object]).isRequired,
    actionButtons: PropTypes.oneOfType([PropTypes.object]),
    children: PropTypes.oneOfType([PropTypes.object]).isRequired,
    iconOnly: PropTypes.bool
};

export default BaseDialog;
