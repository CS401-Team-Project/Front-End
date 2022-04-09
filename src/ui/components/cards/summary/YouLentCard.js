import PropTypes from "prop-types";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

// project imports
import MainCard from "ui/components/cards/MainCard";
import SkeletonEarningCard from "ui/components/cards/Skeleton/EarningCard";

// assets

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
    overflow: "hidden",
    position: "relative",
    "&:after": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: "50%",
        top: -85,
        right: -175,
        [theme.breakpoints.down("sm")]: {
            top: -105,
            right: -140
        }
    },
    "&:before": {
        content: '""',
        position: "absolute",
        width: 210,
        height: 210,
        background: theme.palette.secondary[800],
        borderRadius: "50%",
        top: -175,
        right: -5,
        opacity: 0.5,
        [theme.breakpoints.down("sm")]: {
            top: -155,
            right: -70
        }
    }
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const YouLentCard = ({ isLoading }) => {
    // TODO: Add props for the card to be able to change the number
    // TODO: Change the color of the card to be different from the other 2 cards
    // TODO: Clean up the unneeded buttons and drop-down at the top of the card
    // TODO: Fix the width to look better
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={true}>
                    <Box sx={{ p: 1.5 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <Typography sx={{ fontSize: "2.125rem", fontWeight: 500 }}>$500.00</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        color: theme.palette.secondary[200]
                                    }}
                                >
                                    You Lent
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

YouLentCard.propTypes = {
    isLoading: PropTypes.bool
};

export default YouLentCard;
