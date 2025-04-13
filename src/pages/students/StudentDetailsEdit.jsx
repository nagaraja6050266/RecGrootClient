import { EditPage } from "../../components/EditPage";
import {
    JOIN_TYPE_CONST,
    GENDER_CONST,
    LOC_TYPE_CONST,
} from "../../components/constants/Constants";
import { useState } from "react";
import { getDefaultStudentDetailsLabelsArray } from "../../components/constants/InputLabelsConstants";

export function StudentDetailsEdit() {
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
        
    const errMsgs = {
        email: emailErrorMsg,
        fullName: fullnameErrorMsg,
        mobNo: mobileErrorMsg,
        pincode: pincodeErrMsg,
    };

    const studentsInputFieldsArray = getDefaultStudentDetailsLabelsArray(errMsgs);

    return (
        <EditPage
            heading={"Student 1 Detail"}
            subheading={"Edit the details"}
            fieldsJson={studentsInputFieldsArray}
        />
    );
}
