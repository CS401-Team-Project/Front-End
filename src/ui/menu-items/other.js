// assets
import { IconPalette, IconShadow, IconTestPipe, IconTypography, IconWindmill } from "@tabler/icons";

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: "menu-other",
    type: "group",
    title: "Other",
    children: [
        {
            id: "other-api-test",
            title: "API Client",
            type: "item",
            url: "/app/api-test",
            icon: IconTestPipe,
            breadcrumbs: true
        },
        {
            id: "other-typography",
            title: "Typography",
            type: "item",
            url: "/app/utils/util-typography",
            icon: IconTypography,
            breadcrumbs: false
        },
        {
            id: "other-color",
            title: "Color",
            type: "item",
            url: "/app/utils/util-color",
            icon: IconPalette,
            breadcrumbs: false
        },
        {
            id: "other-shadow",
            title: "Shadow",
            type: "item",
            url: "/app/utils/util-shadow",
            icon: IconShadow,
            breadcrumbs: false
        },
        {
            id: "other-icons",
            title: "Icons",
            type: "collapse",
            icon: IconWindmill,
            children: [
                {
                    id: "tabler-icons",
                    title: "Tabler Icons",
                    type: "item",
                    url: "/app/icons/tabler-icons",
                    breadcrumbs: false
                },
                {
                    id: "material-icons",
                    title: "Material Icons",
                    type: "item",
                    url: "/app/icons/material-icons",
                    breadcrumbs: false
                }
            ]
        }
        // {
        //     id: "sample-page",
        //     title: "Sample Page",
        //     type: "item",
        //     url: "/app/sample-page",
        //     icon: IconBrandChrome,
        //     breadcrumbs: false
        // },
        // {
        //     id: "documentation",
        //     title: "Documentation",
        //     type: "item",
        //     url: "https://codedthemes.gitbook.io/berry/",
        //     icon: IconHelp,
        //     external: true,
        //     target: true
        // }
    ]
};

export default other;
