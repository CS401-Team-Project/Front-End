import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import GroupData from "../old_data/GroupData";

function renderRow(props) {
    const { index, style } = props;

    return (
        <>
            {GroupData.map((values) => {
                return (
                    <ListItem style={style} key={values.id} component="div" disablePadding>
                        <ListItemButton>
                            <ListItemText primary={values.members[index]} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </>
    );
}

export default function VirtualizedList() {
    return (
        <>
            {GroupData.map((values) => {
                return (
                    <Box key={values.id} sx={{ width: "100%", height: 245, maxWidth: "100%", bgcolor: "background.paper" }}>
                        <FixedSizeList height={245} itemSize={46} itemCount={values.members.length} overscanCount={5}>
                            {renderRow}
                        </FixedSizeList>
                    </Box>
                );
            })}
        </>
    );
}
