// noinspection JSCheckFunctionSignatures

import { lazy } from "react";

// project imports
import MainLayout from "ui/layout/MainLayout";
import Loadable from "ui/components/Loadable";

// overview routing
const Dashboard = Loadable(lazy(() => import("ui/pages/dashboard")));
const Activity = Loadable(lazy(() => import("ui/pages/activity")));
const Groups = Loadable(lazy(() => import("ui/pages/groups")));
const Group = Loadable(lazy(() => import("ui/pages/group")));
const Settings = Loadable(lazy(() => import("ui/pages/settings")));

// management routing
const UtilsTypography = Loadable(lazy(() => import("ui/pages/misc/Typography")));
const UtilsColor = Loadable(lazy(() => import("ui/pages/misc/Color")));
const UtilsShadow = Loadable(lazy(() => import("ui/pages/misc/Shadow")));
const UtilsMaterialIcons = Loadable(lazy(() => import("ui/pages/misc/MaterialIcons")));
const UtilsTablerIcons = Loadable(lazy(() => import("ui/pages/misc/TablerIcons")));

// sample page routing
const SamplePage = Loadable(lazy(() => import("ui/pages/misc/sample-page")));

// api test page routing
const ApiTest = Loadable(lazy(() => import("ui/pages/api-client/index")));

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
