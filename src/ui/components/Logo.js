import { Stack } from "@mui/material";
import { IconReceipt } from "@tabler/icons";
import MuiTypography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Logo = () => {
    const theme = useTheme();

    return (
        <Stack direction="row" spacing={1}>
            <IconReceipt size={32} color={theme.palette.secondary.main} />
            <MuiTypography align="center" noWrap={true} fontWeight={500} fontSize={24} color="black">
                Smart Ledger
            </MuiTypography>
        </Stack>
    );
};

export default Logo;
