// project imports
import SubCard from "ui/components/cards/MainCard";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";

const TestPay = ({ user_profile }) => {
    const pay_with = user_profile.pay_with;
    console.log("TestPay => pay_with:", pay_with);

    return (
        <SubCard>
            <Grid container spacing={2}>
                {/*<Grid container item xs={12} spacing={2}>*/}
                {/*    <Grid item>*/}
                {/*        <Button>1</Button>*/}
                {/*    </Grid>*/}
                {/*    <Grid item>*/}
                {/*        <Button>2</Button>*/}
                {/*    </Grid>*/}
                {/*    <Grid item>*/}
                {/*        <Button>3</Button>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
                <Grid container item xs={12} spacing={2}>
                    <Grid item>
                        {/* IF the pay_with contains cashapp key display a normal button otherwise display CashApp Unavailable*/}
                        {pay_with.cashapp ? (
                            <Button variant="outlined" href={pay_with.cashapp} target="_blank">
                                CashApp
                            </Button>
                        ) : (
                            <Button disabled variant="outlined">
                                CashApp Unavailable
                            </Button>
                        )}
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" href="https://www.venmo.com/">
                            Venmo
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </SubCard>
    );
};

TestPay.propTypes = {
    user_profile: PropTypes.object.isRequired
};

export default TestPay;
