// noinspection JSCheckFunctionSignatures

import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "src/ui-component/Loadable";

// overview routing
const Dashboard = Loadable(lazy(() => import("src/views/pages/dashboard")));
const Activity = Loadable(lazy(() => import("src/views/pages/activity")));
const Groups = Loadable(lazy(() => import("src/views/pages/groups")));
const Group = Loadable(lazy(() => import("src/views/pages/group")));
const Settings = Loadable(lazy(() => import("src/views/pages/settings")));

// management routing
const UtilsTypography = Loadable(lazy(() => import("src/views/other/Typography")));
const UtilsColor = Loadable(lazy(() => import("src/views/other/Color")));
const UtilsShadow = Loadable(lazy(() => import("src/views/other/Shadow")));
const UtilsMaterialIcons = Loadable(lazy(() => import("src/views/other/MaterialIcons")));
const UtilsTablerIcons = Loadable(lazy(() => import("src/views/other/TablerIcons")));

// sample page routing
const SamplePage = Loadable(lazy(() => import("src/views/other/sample-page")));

// api test page routing
const ApiTest = Loadable(lazy(() => import("src/views/pages/api-test")));

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
