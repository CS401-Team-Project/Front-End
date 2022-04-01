import { lazy } from "react";

// project imports
import Loadable from "ui-component/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

const TestApiClient = Loadable(lazy(() => import("ui-component/test-api-client")));
const LandingPage = Loadable(lazy(() => import("views/pages/landing")));
// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import("views/pages/authentication/authentication3/Login3")));
const AuthRegister3 = Loadable(lazy(() => import("views/pages/authentication/authentication3/Register3")));

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
        },
        {
            path: "/test-api-client",
            element: <TestApiClient />
        }
    ]
};

export default DefaultRoutes;
