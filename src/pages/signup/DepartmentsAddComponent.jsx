import { useState } from "react";
import { FlexBox } from "../../components/styled-components/styledComponents";
import { Typography, Checkbox } from "@mui/material";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import StyledButton from "../../components/styled-components/StyledButton";

export function DepartmentAddComponent({ depts }) {
    const [additionalDepts, setAdditionalDepts] = useState([
        <CustomLabelInput
            key={0}
            labelName="Department"
            inputType="text"
            inputId="department"
            placeHolder="Enter Department"
            errMsg="Department is required"
            width="100%"
            mandatory={true}
        />,
    ]);

    const defaultRenderCount = 5;

    const handleAddDept = () => {
        setAdditionalDepts((a) => [
            ...a,
            <CustomLabelInput
                key={a.length}
                labelName="Department"
                inputType="text"
                inputId="department"
                placeHolder="Enter Department"
                errMsg="Department is required"
                width="100%"
            />,
        ]);
    };

    depts = [
        {
            id: 1,
            name: "Computer Science",
        },
        {
            id: 2,
            name: "Electronics",
        },
        {
            id: 3,
            name: "Mechanical",
        },
        {
            id: 4,
            name: "Civil",
        },
        {
            id: 5,
            name: "Electrical",
        },
    ];

    return (
        <FlexBox>
            <Typography mt={4} variant="h5" color="primary" fontWeight="bold">
                Departments
            </Typography>
            <FlexBox>
                <FlexBox flexDirection={"column"}>
                    {Array.from({ length: defaultRenderCount }).map((_, i) => (
                        <CustomLabelInput
                            key={i}
                            labelName="Department"
                            inputType="text"
                            inputId="department"
                            placeHolder="Enter Department"
                            errMsg="Department is required"
                            width="100%"
                            mandatory={true}
                        />
                    ))}
                    {additionalDepts}
                </FlexBox>
                <StyledButton
                    variant="outlined"
                    fullWidth
                    onClick={handleAddDept}
                >
                    Add Department
                </StyledButton>
            </FlexBox>
        </FlexBox>
    );
}
