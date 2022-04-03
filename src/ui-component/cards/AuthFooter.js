// material-views
import { Link, Typography, Stack } from "@mui/material";

import config from "config";
// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href={config.links.github.url} target="_blank" underline="hover">
            {config.links.github.name}
        </Typography>
        <Typography variant="subtitle2" component={Link} href={config.links.domain.url} target="_blank" underline="hover">
            &copy; {config.links.domain.name}
        </Typography>
    </Stack>
);

export default AuthFooter;
