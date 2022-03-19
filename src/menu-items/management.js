// assets
import { IconUser, IconSettings } from "@tabler/icons";

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const management = {
    id: "menu-manage",
    title: "Management",
    type: "group",
    children: [
        {
            id: "manage-profile",
            title: "My Profile",
            type: "item",
            url: "/app/profile",
            icon: IconUser,
            breadcrumbs: false
        },
        {
            id: "manage-settings",
            title: "Settings",
            type: "item",
            url: "/app/settings",
            icon: IconSettings,
            breadcrumbs: false
        }
    ]
};

export default management;
