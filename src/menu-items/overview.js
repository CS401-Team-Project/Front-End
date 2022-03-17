// assets
import { IconDashboard, IconActivity, IconUsers } from "@tabler/icons";

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const overview = {
    id: "overview",
    title: "Overview",
    type: "group",
    children: [
        {
            id: "default",
            title: "Dashboard",
            type: "item",
            url: "/app",
            icon: IconDashboard,
            breadcrumbs: true
        },
        {
            id: "activity",
            title: "Activity",
            type: "item",
            url: "/app/activity",
            icon: IconActivity,
            breadcrumbs: true
        },
        {
            id: "groups",
            title: "My Groups",
            type: "item",
            url: "/app/groups",
            icon: IconUsers,
            breadcrumbs: true
        }
    ]
};

export default overview;
