import { Box } from "@mui/material";
import {
    FlexBox,
    StyledButton,
} from "../../components/common-components/styledComponents.jsx";
import { FormHeader } from "../../components/FormHeader.jsx";
import { EnableButton } from "../../components/input-components/EnableButton.jsx";
import CustomLabelInput from "../../components/input-components/CustomLabelInput.jsx";

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
            labelName: "Maximum number of attempts allowed for single student",
            inputId: "maxAttempts",
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
                {settings.inputBtns.map((btn, i) => (
                    <CustomLabelInput
                        gap={20}
                        labelWeight={"100"}
                        labelColor={"black"}
                        labelName={btn.labelName}
                        inputId={btn.inputId}
                        inputType="number"
                        flexType={"row"}
                        defaultValue="50"
                        inputWidth="20%"
                    />
                ))}
            </FlexBox>
            <StyledButton sx={{ mt: 2 }} width="8%" variant="contained">
                Save
            </StyledButton>
        </FlexBox>
    );
}
