import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsViewComponent from "../../components/common-components/DetailsViewComponent";

export function StudentDetails() {
    const { studentId } = useParams();
    const [studentDetails, setStudentDetails] = useState(null);

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
            // Use hardcoded values instead of fetching
            const hardcodedStudentDetails = {
                name: "John Doe",
                dob: "2000-01-01",
                email: "john.doe@example.com",
                phone: "123-456-7890",
                address: "123 Main St, Anytown, USA",
            };
            setStudentDetails(hardcodedStudentDetails);
        }
    }, [studentId]);

    return (
        <DetailsViewComponent
            details={
                studentDetails ? prepareInputFromResponse(studentDetails) : []
            }
        />
    );
}
