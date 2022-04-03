import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import config from "config";
import Logo from "ui/components/Logo";
import { useTheme } from "@mui/material/styles";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const theme = useTheme();

    return (
        <ButtonBase disableRipple component={Link} to={config.paths.landing} color={theme.palette.secondary.main}>
            <Logo />
        </ButtonBase>
    );
};

export default LogoSection;
