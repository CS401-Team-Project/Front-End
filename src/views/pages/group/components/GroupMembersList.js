// eslint-disable-next-line
import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Member ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

export default function VirtualizedList() {
    return (
        <Box sx={{ width: "100%", height: 245, maxWidth: 360, bgcolor: "background.paper" }}>
            <FixedSizeList height={245} width={360} itemSize={46} itemCount={10} overscanCount={5}>
                {renderRow}
            </FixedSizeList>
        </Box>
    );
}
