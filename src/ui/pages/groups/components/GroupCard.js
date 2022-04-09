import PropTypes from "prop-types";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";

// project imports
import MainCard from "ui/components/cards/MainCard";
import TotalIncomeCard from "ui/components/cards/Skeleton/TotalIncomeCard";

// assets
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ManageGroupDialog from "ui/pages/group/dialogs/ManageGroupDialog";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: "hidden",
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: "50%",
        top: -20,
        right: -165
    },
    "&:before": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: "50%",
        top: -160,
        right: -110
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const GroupCard = ({ isLoading }) => {
    const theme = useTheme();

    const onClickGroup = () => {
        console.log("Clicked Group");
    };
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={true}>
                    <Link onClick={onClickGroup}>
                        <List>
                            <ListItem sx={{ py: 0 }} secondaryAction={<ManageGroupDialog iconOnly />}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.primary[800],
                                            color: "#fff"
                                        }}
                                    >
                                        <TableChartOutlinedIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{
                                        py: 0
                                    }}
                                    primary={
                                        <Typography variant="h4" sx={{ color: "#fff" }}>
                                            Group 1
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant="subtitle2" sx={{ color: "primary.light", mt: 0.5 }}>
                                            You owe XX
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Link>
                </CardWrapper>
            )}
        </>
    );
};

GroupCard.propTypes = {
    isLoading: PropTypes.bool
};

export default GroupCard;
