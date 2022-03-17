import { useRoutes } from "react-router-dom";

// routes
import DefaultRoutes from "./DefaultRoutes";
import AppRoutes from "./AppRoutes";
import config from "config";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([DefaultRoutes, AppRoutes], config.basename);
}
