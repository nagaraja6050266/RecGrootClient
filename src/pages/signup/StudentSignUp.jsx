import { Box, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CenteredBox,
    FlexBox,
    StyledButton,
    StyledSpan,
} from "../../components/common-components/styledComponents.jsx";
import { FormHeader } from "../../components/FormHeader.jsx";
import { FormSegment } from "../../components/FormSegment.jsx";
import { getDefaultStudentDetailsLabelsArray } from "../../components/constants/InputLabelsConstants.js";

const Users = [
    {
        email: "nagaraja@gmail.com",
        password: "12345678",
    },
    {
        email: "alagu@gmail.com",
        password: "12345678",
    },
];


function StudentSignUp() {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(true);
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [fullnameErrorMsg, setFullnameErrorMsg] = useState(" ");
    const [mobileErrorMsg, setMobileErrorMsg] = useState(" ");
    const [pincodeErrMsg, setPicodeErrMsg] = useState(" ");
    
    const errMsgs = {
        email: emailErrorMsg,
        fullName: fullnameErrorMsg,
        mobNo: mobileErrorMsg,
        pincode: pincodeErrMsg,
    };
    
    const fieldsJson = getDefaultStudentDetailsLabelsArray(errMsgs);


    let fullname, email, mobileNumber;
    function isFormFilled() {
        fullname = document.getElementById("name").value.trim();
        email = document.getElementById("email").value.trim();
        mobileNumber = document.getElementById("mobile").value.trim();
        if (!fullname) {
            setFullnameErrorMsg("Full Name is Mandatory");
            return false;
        } else {
            setFullnameErrorMsg(" ");
        }
        if (!email) {
            setEmailErrorMsg("Email ID is mandatory");
            return false;
        } else {
            setEmailErrorMsg(" ");
        }
        if (!mobileNumber) {
            setMobileErrorMsg("Mobile number is mandatory");
            return false;
        } else {
            setMobileErrorMsg(" ");
        }
        if (!isChecked) {
            return false;
        }
        return true;
    }
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        if (isFormFilled()) {
            let i = 0;
            while (i < Users.length && Users[i].email != email) {
                i++;
            }
            if (i == Users.length) {
                setEmailErrorMsg(" ");
            } else {
                setEmailErrorMsg("E-Mail already in use");
                return;
            }
            navigate("/set-password", {
                state: {
                    fullname: fullname,
                    email: email,
                    mobileNumber: mobileNumber,
                },
            });
        }
    };

    const handleCancel = () => {
        navigate("/signin");
    };

    return (
        <CenteredBox mt={10} mb={10}>
            <Box width="60%">
                <FormHeader
                    heading="Sign Up"
                    subheading="Enter your details below to create your account"
                />

                {fieldsJson.map((segment, i) => (
                    <FormSegment
                        segmentHeader={segment.segmentHeader}
                        leftInput={segment.leftInput}
                        rightInput={segment.rightInput}
                    />
                ))}

                {/* Terms and conditions agree box */}
                <FlexBox
                    alignItems="center"
                    justifyContent="left"
                    width="100%"
                    mt={1}
                >
                    <Checkbox
                        onChange={handleCheck}
                        size="small"
                        sx={{
                            "&.Mui-checked": {
                                color: "#00205c",
                            },
                        }}
                        defaultChecked
                    />
                    <Typography
                        width="fit-content"
                        variant="body1"
                        color="#5B738B"
                        align="left"
                        fontSize={12}
                    >
                        I agree to the{" "}
                        <StyledSpan
                            href="/signup"
                            textDecoration="underline"
                            color="#5B738B"
                        >
                            Terms and Conditions
                        </StyledSpan>
                    </Typography>
                </FlexBox>

                <FlexBox flexDirection="column" width="100%" mt={5}>
                    <FlexBox gap="20px">
                        <StyledButton
                            variant="outlined"
                            fullWidth
                            onClick={handleCancel}
                        >
                            Cancel
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            type="submit"
                            fullWidth
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </StyledButton>
                    </FlexBox>
                    <Typography
                        variant="body1"
                        color="#5B738B"
                        mt={4}
                        align="center"
                        fontSize={12}
                    >
                        Already have an account ?{" "}
                        <StyledSpan href="/signin">Login</StyledSpan>
                    </Typography>
                </FlexBox>
            </Box>
        </CenteredBox>
    );
}
export default StudentSignUp;
