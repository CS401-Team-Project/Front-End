import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import YouOweCard from "./components/YouOweCard";
import YouAreOwedCard from "./components/YouAreOwedCard";
// import PopularCard from "./components/PopularCard";
// import TotalOrderLineChartCard from "./components/TotalOrderLineChartCard";
// import TotalIncomeDarkCard from "./components/TotalIncomeDarkCard";
// import TotalIncomeLightCard from "./components/TotalIncomeLightCard";
// import TotalGrowthBarChart from "./components/TotalGrowthBarChart";
import { gridSpacing } from "store/constant";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Index = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} sm={12}>
                        <YouOweCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={12} md={12} sm={12}>
                        <YouAreOwedCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Index;
