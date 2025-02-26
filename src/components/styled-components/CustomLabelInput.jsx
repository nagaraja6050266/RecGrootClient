import {
    CustomInput,
    CustomLabel,
    CustomLabelInputContainer,
    StyledDatePicker,
} from "./styledComponents";
import PasswordInput from "./PasswordInput";
import DropDown from "../dashboard-components/DropDown";

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
}) {
    return (
        <CustomLabelInputContainer width={width}>
            <CustomLabel htmlFor={inputId}>{labelName}</CustomLabel>
            {inputType == "date" ? (
                <StyledDatePicker />
            ) : inputType == "dropdown" ? (
                <DropDown id={inputId} width={0} optionsArray={optionsArray}></DropDown>
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
                        backgroundColor: errMsg != " " ? "#FFEAF4" : "#eaecee",
                    }}
                    type={inputType}
                    id={inputId}
                    placeholder={placeHolder}
                    required
                />
            )}
            <CustomLabel style={{ color: "red" }} htmlFor={inputId}>
                {errMsg}
            </CustomLabel>
        </CustomLabelInputContainer>
    );
}

export default CustomLabelInput;
