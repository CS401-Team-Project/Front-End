// assets
import { IconUsers } from "@tabler/icons";

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const groups = {
    id: "groups",
    title: "Groups",
    type: "group",
    children: [
        {
            id: "group1",
            title: "Group 1",
            type: "item",
            url: "/app/group?id=1",
            icon: IconUsers,
            breadcrumbs: true
        },
        {
            id: "group2",
            title: "Group 2",
            type: "item",
            url: "/app/group?id=2",
            icon: IconUsers,
            breadcrumbs: true
        },
        {
            id: "group3",
            title: "Group 3",
            type: "item",
            url: "/app/group?id=3",
            icon: IconUsers,
            breadcrumbs: true
        }
    ]
};

export default groups;
