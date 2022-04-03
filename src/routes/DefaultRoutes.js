import { lazy } from "react";

// project imports
import Loadable from "ui/components/Loadable";
import MinimalLayout from "ui/layout/MinimalLayout";

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
