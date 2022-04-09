// material-ui
import { Stack } from "@mui/material";
import SubCard from "ui/components/cards/SubCard";
import BalanceCard from "ui/components/cards/summary/BalanceCard";
import YouOweCard from "ui/components/cards/summary/YouOweCard";
import YouLentCard from "ui/components/cards/summary/YouLentCard";
import SettleBalancesDialog from "ui/pages/group/dialogs/SettleBalancesDialog";

// ==============================|| CUSTOM SUB CARD ||============================== //

const GroupBalanceSummary = () => {
    /*
    TODO: Add props to this component (whichever ones are needed from the parent)
    in order to pass them down to the sub-component cards below.
    */
    return (
        <SubCard
            title="Balance Summary"
            contentProps={{ component: Stack, spacing: 2, direction: "row" }}
            secondary={<SettleBalancesDialog />}
        >
            <BalanceCard />
            <YouOweCard />
            <YouLentCard />
        </SubCard>
    );
};

export default GroupBalanceSummary;
