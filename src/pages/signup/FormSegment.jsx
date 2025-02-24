import { Grid, Typography } from "@mui/material";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { FlexBox } from "../../components/styled-components/styledComponents";

export function FormSegment({ segmentHeader, leftInput, rightInput }) {

    const getCustomLabelInput = (input) => {
        return <CustomLabelInput
            labelName={input.labelName}
            inputType={input.inputType}
            inputId={input.inputId}
            placeHolder={input.placeHolder}
            errMsg={input.errMsg}
            width={input.width}
            mandatory={input.mandatory}
            optionsArray={input.mandatory}
        />
    }

    const menuItems = optionsArray.map((option, i) => (
        <MenuItem sx={{ fontSize: "11px" }} key={i} value={option}>
            {option}
        </MenuItem>
    ));

    const rightInputs = rightInput.map((input, i) => (
        
    ));

    return (
        <>
            <Typography mt={4} variant="h5" color="primary" fontWeight="bold">
                {segmentHeader}
            </Typography>

            <FlexBox>
                <FlexBox flexDirection={"column"}>
                    {rightInputs}
                </FlexBox>
            </FlexBox>

            <Grid container item xs={12} spacing={2}>
                <Grid item xs={6}>
                    <CustomLabelInput
                        labelName="LinkedIn Profile Link"
                        inputId="linkedInLink"
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomLabelInput
                        labelName="Other link"
                        inputId="otherLink"
                    />
                </Grid>
            </Grid>
        </>
    );
}
