import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsViewComponent from "../../components/common-components/DetailsViewComponent";

export default function CompanyDetails() {
    const { companyId } = useParams();
    const [companyDetails, setCompanyDetails] = useState(null);

    function prepareInputFromResponse(response) {
        const { name, industry, description } = response;
        return [
            {
                sectionHeader: "Company Details",
                values: [
                    {
                        label: "Name",
                        value: name,
                    },
                    {
                        label: "Industry",
                        value: industry,
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
        if (companyId) {
            // Use hardcoded values instead of fetching
            const hardcodedCompanyDetails = {
                name: "Sample Company",
                industry: "Technology",
                description: "This is a sample company description.",
            };
            setCompanyDetails(hardcodedCompanyDetails);
        }
    }, [companyId]);

    return (
        <DetailsViewComponent
            details={
                companyDetails ? prepareInputFromResponse(companyDetails) : []
            }
        />
    );
}
