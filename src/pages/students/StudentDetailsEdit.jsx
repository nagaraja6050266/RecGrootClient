import { EditPage } from "../../components/EditPage";
import { JOIN_TYPE_CONST, GENDER_CONST, LOC_TYPE_CONST } from "../../Constants";
import { useState } from "react";

export function StudentDetailsEdit() {
    const [isChecked, setIsChecked] = useState(true);
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [fullnameErrorMsg, setFullnameErrorMsg] = useState(" ");
    const [mobileErrorMsg, setMobileErrorMsg] = useState(" ");
    const [pincodeErrMsg, setPicodeErrMsg] = useState(" ");

    const Colleges = ["GCE", "Anna Univ", "FXEC"];
    const Departments = ["CSE", "ECE", "EEE"];

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

    const studentsInputFieldsArray = [
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

    return (
        <EditPage
            heading={"Student 1 Detail"}
            subheading={"Edit the details"}
            fieldsJson={studentsInputFieldsArray}
        />
    );
}
