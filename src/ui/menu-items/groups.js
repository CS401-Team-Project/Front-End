// assets
import { IconUsers } from "@tabler/icons";

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const groups = {
    id: "menu-groups",
    title: "Groups",
    type: "group",
    children: [
        {
            id: "groups-g1",
            title: "Group 1",
            type: "item",
            url: "/app/group?id=1",
            icon: IconUsers,
            breadcrumbs: true
        },
        {
            id: "groups-g2",
            title: "Group 2",
            type: "item",
            url: "/app/group?id=2",
            icon: IconUsers,
            breadcrumbs: true
        },
        {
            id: "groups-g3",
            title: "Group 3",
            type: "item",
            url: "/app/group?id=3",
            icon: IconUsers,
            breadcrumbs: true
        }
    ]
};

export default groups;
