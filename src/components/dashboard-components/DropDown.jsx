import { MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";
import {
    CustomLabel,
    StyledSelect,
} from "../styled-components/styledComponents";

export default function DropDown({
    width,
    optionsArray,
    backgroundcolor,
    id,
    label,
}) {
    const [filter, setFilter] = useState(optionsArray[0]);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const menuItems = optionsArray.map((option, i) => (
        <MenuItem sx={{ fontSize: "11px" }} key={i} value={option}>
            {option}
        </MenuItem>
    ));

    return (
        <FormControl sx={{gap: 0.5 }} size="small">
            {label && (
                <CustomLabel color="#5B738B" fontSize="10px">
                    {label}
                </CustomLabel>
            )}
            <StyledSelect
                width={width}
                backgroundcolor={backgroundcolor}
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                id={id}
            >
                {menuItems}
            </StyledSelect>
        </FormControl>
    );
}
