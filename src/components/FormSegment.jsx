import { Grid, Typography } from "@mui/material";
import CustomLabelInput from "./input-components/CustomLabelInput";
import { FlexBox } from "./common-components/styledComponents";

export function FormSegment({ segmentHeader, leftInput, rightInput }) {
    const getCustomLabelInput = (input, key) => {
        return (
            <CustomLabelInput
                key={key}
                labelName={input.labelName}
                inputType={input.inputType}
                inputId={input.inputId}
                placeHolder={input.placeHolder}
                errMsg={input.errMsg}
                width={input.width}
                mandatory={input.mandatory}
                optionsArray={input.optionsArray}
            />
        );
    };

    const leftInputs = leftInput.map((input, i) =>
        getCustomLabelInput(input, i)
    );

    const rightInputs = rightInput.map((input, i) =>
        getCustomLabelInput(input, i)
    );

    return (
        <FlexBox mt={3} flexDirection={"column"} alignItems={"flex-start"}>
            <Typography variant="h5" color="primary" fontWeight="bold">
                {segmentHeader}
            </Typography>

            <FlexBox gap={2}>
                <FlexBox flexDirection={"column"}>{...leftInputs}</FlexBox>
                <FlexBox flexDirection={"column"}>{...rightInputs}</FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
