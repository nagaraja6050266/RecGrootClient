import { Box, Grid, Typography, Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import {
    CenteredBox,
    FlexBox,
    StyledButton,
    StyledSpan,
} from "../../components/styled-components/styledComponents";
import { LOC_TYPE_CONST, JOIN_TYPE_CONST, GENDER_CONST } from "../../Constants.js";

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
                <Typography
                    mt={4}
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                >
                    Personal Details
                </Typography>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Full Name"
                            inputId="name"
                            value="name"
                            errMsg={fullnameErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Gender"
                            inputId="gender"
                            inputType="dropdown"
                            optionsArray={GENDER_CONST}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Date of Birth"
                            inputId="dob"
                            inputType="text"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Parent's Number"
                            inputId="parentNumber"
                            inputType="text"
                        />
                    </Grid>
                </Grid>
                <Typography
                    mt={4}
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                >
                    Contact Details
                </Typography>

                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Email"
                            inputType="email"
                            inputId="email"
                            errMsg={emailErrorMsg}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomLabelInput
                            labelName="Mobile Number"
                            inputId="mobile"
                            errMsg={mobileErrorMsg}
                        />
                    </Grid>
                </Grid>

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

                    <Typography
                        mt={4}
                        variant="h5"
                        color="primary"
                        fontWeight="bold"
                    >
                        Address
                    </Typography>

                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Address Line 1"
                                inputId="addressLine1"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Address Line 2"
                                inputId="addressLine2"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Landmark"
                                inputId="landmark"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput labelName="City" inputId="city" />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="District"
                                inputId="district"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="State"
                                inputId="state"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Pincode"
                                inputId="pincode"
                                errMsg={pincodeErrMsg}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Location Type"
                                optionsArray={LOC_TYPE_CONST}
                                inputType="dropdown"
                            />
                        </Grid>
                    </Grid>
                    <Typography
                        mt={4}
                        variant="h5"
                        color="primary"
                        fontWeight="bold"
                    >
                        Academic Details
                    </Typography>

                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="College"
                                inputType="dropdown"
                                inputId="college"
                                optionsArray={Colleges}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Department"
                                inputId="department"
                                inputType="dropdown"
                                optionsArray={Departments}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Register Number"
                                inputType="text"
                                inputId="regNo"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Date of Joining"
                                inputId="date"
                                inputType="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Joining Type"
                                inputType="dropdown"
                                inputId="joinType"
                                optionsArray={JOIN_TYPE_CONST}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Graduation Year"
                                inputId="graduationYear"
                                inputType="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="CGPA"
                                inputId="cgpa"
                                inputType="text"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="SSLC Percentage"
                                inputId="sslcPercentage"
                                inputType="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="HSC/Diploma Percentage"
                                inputId="hscDiplomaPercentage"
                                inputType="text"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Placement Status"
                                inputId="placementStatus"
                                inputType="text"
                            />
                        </Grid>
                    </Grid>

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
