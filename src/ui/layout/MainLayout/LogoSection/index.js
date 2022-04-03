import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import config from "config";
import Logo from "ui/components/Logo";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.paths.landing}>
        <Logo />
    </ButtonBase>
);

export default LogoSection;
