import {
    GENDER_CONST,
    JOIN_TYPE_CONST,
    LOC_TYPE_CONST,
} from "../../components/constants/Constants.js";

const Colleges = ["GCE", "Anna Univ", "FXEC"];
const Departments = ["CSE", "ECE", "EEE"];

export function getAddressSegment(errMsgs = {}) {
    return {
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
    };
}

export function getContactSegment(errMsgs = {}) {
    return {
        segmentHeader: "Contact Details",
        leftInput: [
            {
                labelName: "Email",
                inputType: "email",
                inputId: "email",
                errMsg: errMsgs.email,
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
                errMsg: errMsgs.mobNo,
            },
            {
                labelName: "Other link",
                inputId: "otherLink",
            },
        ],
    };
}

export function getDefaultStudentDetailsLabelsArray(errMsgs = {}) {
    return [
        {
            segmentHeader: "Personal Details",
            leftInput: [
                {
                    labelName: "Full Name",
                    inputId: "name",
                    errMsg: errMsgs.fullName,
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
        getAddressSegment(errMsgs),
        getContactSegment(errMsgs),
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
}

export function getCompanyDetailsLabelArray(errMsgs = {}) {
    return [
        {
            segmentHeader: "Company Details",
            leftInput: [
                {
                    labelName:"Company Name",
                    inputId: "companyName"
                },
                {
                    labelName: ""
                }
            ]
        },
    ];
}

// export const defaultStudentDetailsInputJsonArray =
