import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FlexBox } from "../common-components/styledComponents";

function OfficeLocation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const institute = {
        name: "Government College of Engineering",
        location: "Tirunelveli"
    }

    return (
        <FlexBox flexDirection={"column"} alignItems={"flex-start"}>
                <Typography variant="h4">
                    {institute.name}
                </Typography>
                <Typography variant="body6" color="#8396A8">
                    {institute.location}
                </Typography>
        </FlexBox>
    );
}

export default OfficeLocation;
