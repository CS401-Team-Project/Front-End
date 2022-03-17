// assets
import { IconUser, IconSettings } from "@tabler/icons";

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const management = {
    id: "Management",
    title: "Management",
    type: "group",
    children: [
        {
            id: "profile",
            title: "My Profile",
            type: "item",
            url: "/app/profile",
            icon: IconUser,
            breadcrumbs: false
        },
        {
            id: "settings",
            title: "Settings",
            type: "item",
            url: "/app/settings",
            icon: IconSettings,
            breadcrumbs: false
        }
    ]
};

export default management;
