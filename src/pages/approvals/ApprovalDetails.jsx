import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsViewComponent from "../../components/common-components/DetailsViewComponent";

export default function ApprovalDetails() {
    const { approvalId } = useParams();
    const [approvalDetails, setApprovalDetails] = useState(null);

    function prepareInputFromResponse(response) {
        const { name, status, description } = response;
        return [
            {
                sectionHeader: "Approval Details",
                values: [
                    {
                        label: "Name",
                        value: name,
                    },
                    {
                        label: "Status",
                        value: status,
                    },
                    {
                        label: "Description",
                        value: description,
                    },
                ],
            },
        ];
    }

    useEffect(() => {
        if (approvalId) {
            const hardcodedApprovalDetails = {
                name: "Sample Approval",
                status: "Pending",
                description: "This is a sample approval description.",
            };
            setApprovalDetails(hardcodedApprovalDetails);
        }
    }, [approvalId]);

    return (
        <DetailsViewComponent
            details={
                approvalDetails ? prepareInputFromResponse(approvalDetails) : []
            }
        />
    );
}
