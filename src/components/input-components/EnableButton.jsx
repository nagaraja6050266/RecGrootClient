import { useState } from "react";
import { CustomLabel, FlexBox } from "../common-components/styledComponents";
import { Switch } from "@mui/material";

export function EnableButton({label,checked}){
    const [isChecked, setIsChecked] = useState(checked);
    const handleSwitchChange = () => {
        setIsChecked(!isChecked);
    }
    
    return <FlexBox gap="20%">
        <CustomLabel style={{minWidth: "50%"}} color="black" weight="100" >{label}</CustomLabel>
        <Switch checked={isChecked} onChange={handleSwitchChange} />
    </FlexBox>
}