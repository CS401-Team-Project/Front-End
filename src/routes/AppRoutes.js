// noinspection JSCheckFunctionSignatures

import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// overview routing
const Dashboard = Loadable(lazy(() => import("views/pages/dashboard")));
const Activity = Loadable(lazy(() => import("views/pages/activity")));
const Groups = Loadable(lazy(() => import("views/pages/groups")));
const Group = Loadable(lazy(() => import("views/pages/group")));
const Settings = Loadable(lazy(() => import("views/pages/settings")));

// management routing
const UtilsTypography = Loadable(lazy(() => import("views/other/Typography")));
const UtilsColor = Loadable(lazy(() => import("views/other/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/other/Shadow")));
const UtilsMaterialIcons = Loadable(lazy(() => import("views/other/MaterialIcons")));
const UtilsTablerIcons = Loadable(lazy(() => import("views/other/TablerIcons")));

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/other/sample-page")));

// api test page routing
const ApiTest = Loadable(lazy(() => import("views/pages/api-test")));

// ==============================|| MAIN ROUTING ||============================== //

const AppRoutes = {
    path: "/app",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/activity",
            element: <Activity />
        },
        {
            path: "/groups",
            element: <Groups />
        },
        {
            path: "/group",
            element: <Group />
        },
        {
            path: "/settings",
            element: <Settings />
        },
        {
            path: "/utils/util-typography",
            element: <UtilsTypography />
        },
        {
            path: "/utils/util-color",
            element: <UtilsColor />
        },
        {
            path: "/utils/util-shadow",
            element: <UtilsShadow />
        },
        {
            path: "/icons/tabler-icons",
            element: <UtilsTablerIcons />
        },
        {
            path: "/icons/material-icons",
            element: <UtilsMaterialIcons />
        },
        {
            path: "/sample-page",
            element: <SamplePage />
        },
        {
            path: "/api-test",
            element: <ApiTest />
        }
    ]
};

export default AppRoutes;
