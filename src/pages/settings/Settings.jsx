import { Box } from "@mui/material";
import { FlexBox } from "../../components/common-components/styledComponents.jsx";
import { FormHeader } from "../../components/FormHeader.jsx";
import { EnableButton } from "../../components/input-components/EnableButton.jsx";


const settings = {
    enableBtns: [
        {
            labelName: "Auto approve student applications",
            isChecked: false,
        },
        {
            labelName: "Auto approve student profile update",
            isChecked: false,
        },
    ],
    inputBtns: [
        {
            labelName: "Full Name",
            inputId: "name",
        },
    ],
};

export function Settings() {
    return (
        <FlexBox flexDirection={"column"} p={2} alignItems={"flex-start"}>
            <FormHeader heading="Settings" />
            <FlexBox flexDirection={"column"} width="70%">
                {settings.enableBtns.map((enableBtn, i) => (
                    <EnableButton
                        label={enableBtn.labelName}
                        key={i}
                        checked={enableBtn.isChecked}
                    />
                ))}
                
            </FlexBox>
        </FlexBox>
    );
}
