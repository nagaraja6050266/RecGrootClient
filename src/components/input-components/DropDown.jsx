import { FormControl, MenuItem } from "@mui/material";
import { useState } from "react";
import {
    CustomLabel,
    StyledSelect,
} from "../common-components/styledComponents";

export default function DropDown({
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
        <FormControl fullWidth sx={{ gap: 0.5 }} size="small">
            {label && (
                <CustomLabel color="#5B738B" fontSize="10px">
                    {label}
                </CustomLabel>
            )}
            <StyledSelect
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
