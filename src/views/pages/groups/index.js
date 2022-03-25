// Group Page uses Group1.js, Group2.js, MainContent
// project imports
import MainCard from "ui-component/cards/MainCard";
import Group1 from "./components/Group1";
import Group2 from "./components/Group2";

// ==============================|| TYPOGRAPHY ||============================== //

const Groups = () => {
    return (
        <MainCard>
            <Group1 />
            <Group2 />
        </MainCard>
    );
};

export default Groups;
