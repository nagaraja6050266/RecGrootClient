import {
    CustomInput,
    CustomLabel,
    CustomLabelInputContainer,
    FlexBox,
    StyledDatePicker,
} from "../common-components/styledComponents";
import PasswordInput from "./PasswordInput";
import DropDown from "./DropDown";
import { useState } from "react";

function CustomLabelInput({
    labelName,
    inputType = "text",
    inputId,
    placeHolder = "Enter " + labelName,
    errMsg = " ",
    width = "100%",
    mandatory = false,
    optionsJson,
    optionsArray = optionsJson ? Object.values(optionsJson) : [],
    labelColor,
    labelWeight,
    flexType,
    defaultValue,
    inputWidth,
    gap,
}) {
    const [inputValue, setInputValue] = useState(defaultValue);
    const handleInputValueChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <FlexBox
            width={width}
            mt={"20px"}
            gap={gap || 1}
            alignItems={flexType ? "center" : "flex-start"}
            flexDirection={flexType || "column"}
        >
            <CustomLabel
                weight={labelWeight}
                color={labelColor}
                htmlFor={inputId}
            >
                {labelName}
            </CustomLabel>
            <FlexBox width={inputWidth} flexDirection={"column"}>
                {inputType == "date" ? (
                    <StyledDatePicker />
                ) : inputType == "dropdown" ? (
                    <DropDown
                        id={inputId}
                        optionsArray={optionsArray}
                    ></DropDown>
                ) : inputType == "password" ? (
                    <PasswordInput
                        id={inputId}
                        inputType={inputType}
                        placeholder={placeHolder}
                        errMsg={errMsg}
                    />
                ) : (
                    <CustomInput
                        style={{
                            backgroundColor:
                                errMsg != " " ? "#FFEAF4" : "#eaecee",
                        }}
                        type={inputType}
                        id={inputId}
                        placeholder={placeHolder}
                        width={"100%"}
                        value={inputValue}
                        onChange={handleInputValueChange}
                        required
                    />
                )}

                {errMsg || (
                    <CustomLabel style={{ color: "red" }} htmlFor={inputId}>
                        {errMsg}
                    </CustomLabel>
                )}
            </FlexBox>
        </FlexBox>
    );
}

export default CustomLabelInput;
