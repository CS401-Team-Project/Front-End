import { useEffect } from "react";
import { Typography } from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import useApi from "hooks/useApi";
import userApi from "api/user";

const TestProfile = () => {
    const user = useApi(userApi.user_info);

    useEffect(() => {
        user.request();
    }, []);
    console.log(user);

    return (
        <MainCard title="Settings">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president,
                sunk in culpa qui officiate descent molls anim id est labours.
            </Typography>
        </MainCard>
    );
};

export default TestProfile;
