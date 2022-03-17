import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// overview routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));
const Activity = Loadable(lazy(() => import("views/pages/activity")));
const Groups = Loadable(lazy(() => import("views/pages/groups")));
const Group = Loadable(lazy(() => import("views/pages/group")));

// management routing
const UtilsTypography = Loadable(lazy(() => import("views/utilities/Typography")));
const UtilsColor = Loadable(lazy(() => import("views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("views/utilities/Shadow")));
const UtilsMaterialIcons = Loadable(lazy(() => import("views/utilities/MaterialIcons")));
const UtilsTablerIcons = Loadable(lazy(() => import("views/utilities/TablerIcons")));

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

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
        }
    ]
};

export default AppRoutes;
