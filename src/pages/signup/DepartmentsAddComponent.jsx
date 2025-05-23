import { useState } from "react";
import { FlexBox } from "../../components/common-components/styledComponents";
import { Typography } from "@mui/material";
import CustomLabelInput from "../../components/input-components/CustomLabelInput";
import { StyledButton } from "../../components/common-components/styledComponents";

export function DepartmentAddComponent({ depts }) {
    const [additionalDepts, setAdditionalDepts] = useState([]);

    const defaultRenderCount = 5;
    const [currCount, setCurrCount] = useState(defaultRenderCount + 1);

    const handleAddDept = () => {
        setCurrCount((c) => c + 1);
        setAdditionalDepts((a) => [
            ...a,
            <CustomLabelInput
                key={a.length + currCount}
                labelName={"Department " + currCount}
                inputType="dropdown"
                inputId={"department" + currCount}
                optionsArray={depts}
            />,
        ]);
    };

    return (
        <FlexBox
            flexDirection={"column"}
            width={"70%"}
            alignItems={"flex-start"}
        >
            <Typography
                mt={4}
                variant="h5"
                color="primary"
                fontWeight="bold"
                align="left"
            >
                Departments
            </Typography>
            <FlexBox flexDirection={"column"} mt={1}>
                <FlexBox flexDirection={"column"}>
                    {Array.from({ length: defaultRenderCount }).map((_, i) => (
                        <CustomLabelInput
                            key={i}
                            labelName={"Department " + (i + 1)}
                            inputType="dropdown"
                            inputId={"department" + (i + 1)}
                            optionsArray={depts}
                        />
                    ))}
                    {additionalDepts}
                </FlexBox>
                <StyledButton variant="outlined" onClick={handleAddDept}>
                    Add Department
                </StyledButton>
            </FlexBox>
        </FlexBox>
    );
}
