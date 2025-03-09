import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsViewComponent from "../after-login/DetailsViewComponent";

export function StudentDetails() {
    const { studentId } = useParams();
    const [studentDetails, setStudentDetails] = useState(null);

    async function fetchStudentDetails() {
        try {
            const response = await fetch(`/api/students/${studentId}`);
            const data = await response.json();
            setStudentDetails(data);
        } catch (error) {
            console.error("Error fetching student details: ", error);
        }
    }

    function prepareInputFromResponse(response) {
        const { name, dob, email, phone, address } = response;
        return [
            {
                sectionHeader: "Personal Details",
                values: [
                    {
                        label: "Name",
                        value: name,
                    },
                    {
                        label: "DOB",
                        value: dob,
                    },
                ],
            },
            {
                sectionHeader: "Contact Details",
                values: [
                    {
                        label: "Email",
                        value: email,
                    },
                    {
                        label: "Phone",
                        value: phone,
                    },
                    {
                        label: "Address",
                        value: address,
                    },
                ],
            },
        ];
    }

    useEffect(() => {
        if (studentId) {
            fetchStudentDetails();
        }
    }, [studentId]);

    return <DetailsViewComponent />;
    // return <DetailsViewComponent details={studentDetails} />;
}
