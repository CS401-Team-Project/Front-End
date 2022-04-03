// assets
import { IconDashboard, IconActivity, IconUsers } from "@tabler/icons";

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const overview = {
    id: "menu-overview",
    title: "Overview",
    type: "group",
    children: [
        {
            id: "overview-default",
            title: "Dashboard",
            type: "item",
            url: "/app",
            icon: IconDashboard,
            breadcrumbs: true
        },
        {
            id: "overview-activity",
            title: "Activity",
            type: "item",
            url: "/app/activity",
            icon: IconActivity,
            breadcrumbs: true
        },
        {
            id: "overview-groups",
            title: "My Groups",
            type: "item",
            url: "/app/groups",
            icon: IconUsers,
            breadcrumbs: true
        }
    ]
};

export default overview;
