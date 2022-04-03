import { lazy } from "react";

// project imports
import Loadable from "src/ui-component/Loadable";
import MinimalLayout from "layout/MinimalLayout";

const LandingPage = Loadable(lazy(() => import("src/views/pages/landing")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const DefaultRoutes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {
            path: "/",
            element: <LandingPage />
        }
    ]
};

export default DefaultRoutes;
