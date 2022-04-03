import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MinimalLayout from "layout/MinimalLayout";

const LandingPage = Loadable(lazy(() => import("views/pages/landing")));

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
