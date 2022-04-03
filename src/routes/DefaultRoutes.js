import { lazy } from "react";

// project imports
import MinimalLayout from "ui/layout/MinimalLayout";
import Loadable from "ui/components/Loadable";

const LandingPage = Loadable(lazy(() => import("ui/pages/landing")));

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
