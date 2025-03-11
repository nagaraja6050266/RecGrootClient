import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsViewComponent from "../../components/common-components/DetailsViewComponent";

export default function DriveDetails() {
    const { driveId } = useParams();
    const [driveDetails, setDriveDetails] = useState(null);

    function prepareInputFromResponse(response) {
        const { name, date, description } = response;
        return [
            {
                sectionHeader: "Drive Details",
                values: [
                    {
                        label: "Name",
                        value: name,
                    },
                    {
                        label: "Date",
                        value: date,
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
        if (driveId) {
            // Use hardcoded values instead of fetching
            const hardcodedDriveDetails = {
                name: "Sample Drive",
                date: "2023-10-01",
                description: "This is a sample drive description.",
            };
            setDriveDetails(hardcodedDriveDetails);
        }
    }, [driveId]);

    return (
        <DetailsViewComponent
            details={driveDetails ? prepareInputFromResponse(driveDetails) : []}
        />
    );
}
