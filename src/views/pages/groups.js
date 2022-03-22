// project imports
import MainCard from "ui-component/cards/MainCard";
import TotalIncomeDarkCard from "./TotalIncomeDarkCard";
import TotalIncomeLightCard from "./TotalIncomeLightCard";

// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <MainCard>
            <TotalIncomeDarkCard />
            <TotalIncomeLightCard />
        </MainCard>
    );
};

export default Groups;
