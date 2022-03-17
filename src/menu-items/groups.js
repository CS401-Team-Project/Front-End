// assets
import { IconUsers } from "@tabler/icons";

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const groups = {
    id: "groups",
    title: "Groups",
    // caption: "Pages Caption",
    type: "group",
    children: [
        {
            id: "group1",
            title: "Group 1",
            type: "item",
            icon: IconUsers,
            url: "/app/group?id=1"
        },
        {
            id: "group2",
            title: "Group 2",
            type: "item",
            icon: IconUsers,
            url: "/app/group?id=2"
        },
        {
            id: "group3",
            title: "Group 3",
            type: "item",
            icon: IconUsers,
            url: "/app/group?id=3"
        }
    ]
};

export default groups;
