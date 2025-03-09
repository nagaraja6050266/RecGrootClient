import { Box, Checkbox, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CenteredBox,
    FlexBox,
    StyledButton,
    StyledSpan,
} from "../../components/common-components/styledComponents.jsx";
import {
    GENDER_CONST,
    JOIN_TYPE_CONST,
    LOC_TYPE_CONST,
} from "../../Constants.js";
import { FormSegment } from "../../components/FormSegment.jsx";

const Colleges = ["GCE", "Anna Univ", "FXEC"];
const Departments = ["CSE", "ECE", "EEE"];
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

    const fieldsJson = [
        {
            segmentHeader: "Personal Details",
            leftInput: [
                {
                    labelName: "Full Name",
                    inputId: "name",
                    errMsg: fullnameErrorMsg,
                },
                {
                    labelName: "Date of Birth",
                    inputId: "dob", //Date type should be added
                },
            ],
            rightInput: [
                {
                    labelName: "Gender",
                    inputId: "gender",
                    inputType: "dropdown",
                    optionsArray: GENDER_CONST,
                },
                {
                    labelName: "Parents Number",
                    inputId: "parentNo",
                },
            ],
        },
        {
            segmentHeader: "Contact Details",
            leftInput: [
                {
                    labelName: "Email",
                    inputType: "email",
                    inputId: "email",
                    errMsg: emailErrorMsg,
                },
                {
                    labelName: "LinkedIn Profile Link",
                    inputId: "linkedInLink",
                },
            ],
            rightInput: [
                {
                    labelName: "Mobile Number",
                    inputId: "mobile",
                    errMsg: mobileErrorMsg,
                },
                {
                    labelName: "Other link",
                    inputId: "otherLink",
                },
            ],
        },
        {
            segmentHeader: "Address",
            leftInput: [
                {
                    labelName: "Address Line 1",
                    inputId: "addressLine1",
                },
                {
                    labelName: "Landmark",
                    inputId: "landmark",
                },
                {
                    labelName: "District",
                    inputId: "district",
                },
                {
                    labelName: "Pincode",
                    inputId: "pincode",
                },
            ],
            rightInput: [
                {
                    labelName: "Address Line 2",
                    inputId: "addressLine2",
                },
                {
                    labelName: "City",
                    inputId: "city",
                },
                {
                    labelName: "State",
                    inputId: "state",
                },
                {
                    labelName: "Location Type",
                    inputId: "locationType",
                    inputType: "dropdown",
                    optionsArray: LOC_TYPE_CONST,
                },
            ],
        },
        {
            segmentHeader: "Academic Details",
            leftInput: [
                {
                    labelName: "College",
                    inputType: "dropdown",
                    inputId: "college",
                    optionsArray: Colleges,
                },
                {
                    labelName: "Register Number",
                    inputId: "regNo",
                },
                {
                    labelName: "Joining Type",
                    inputId: "joinType",
                    inputType: "dropdown",
                    optionsArray: JOIN_TYPE_CONST,
                },
                {
                    labelName: "CGPA",
                    inputId: "cgpa",
                },
                {
                    labelName: "HSC/Diploma Percentage",
                    inputId: "hscDiplomaPercentage",
                },
            ],
            rightInput: [
                {
                    labelName: "Department",
                    inputId: "department",
                    inputType: "dropdown",
                    optionsArray: Departments,
                },

                {
                    labelName: "Date of Joining",
                    inputId: "date",
                },
                {
                    labelName: "Graduation Year",
                    inputId: "graduationYear",
                },
                {
                    labelName: "SSLC Percentage",
                    inputId: "sslcPercentage",
                },
                {
                    labelName: "Placement Status",
                    inputId: "placementStatus",
                },
            ],
        },
    ];

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
                <Box pl={0}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        Sign Up
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Enter your details below to create your account
                    </Typography>
                </Box>

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
