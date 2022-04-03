import { lazy } from "react";

// project imports
import Loadable from "ui/components/Loadable";
import MinimalLayout from "ui/layout/MinimalLayout";

const LandingPage = Loadable(lazy(() => import("ui/pages/landing")));
// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import("ui/pages/auth/authentication3/Login3")));
const AuthRegister3 = Loadable(lazy(() => import("ui/pages/auth/authentication3/Register3")));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const DefaultRoutes = {
    path: "/",
    element: <MinimalLayout />,
    children: [
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/login",
            element: <AuthLogin3 />
        },
        {
            path: "/register",
            element: <AuthRegister3 />
        }
    ]
};

export default DefaultRoutes;
