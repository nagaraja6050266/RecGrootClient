import React from "react";
import { ListEntitiesPage } from "../../components/common-components/ListEntitiesPage";
import { useNavigate } from "react-router-dom";

export default function DrivesList() {
    const navigate = useNavigate();

    const getInvokeMethod = (driveID) => {
        const url = "/rep/drives/" + driveID;
        navigate(url);
    };

    const drivesData = {
        entity: "Drives",
        captionLine: "List of all drives",
        table: {
            columns: [
                { id: "driveID", label: "ID", minWidth: 70 },
                { id: "name", label: "Name", minWidth: 170 },
                { id: "date", label: "Date", minWidth: 100, align: "right" },
            ],
            rows: [
                {
                    driveID: 1,
                    name: "Drive 1",
                    date: "2023-10-01",
                    invokeMethod: () => getInvokeMethod(1),
                },
                { driveID: 2, name: "Drive 2", date: "2023-11-01" },
            ],
        },
        options: {},
    };
    return <ListEntitiesPage {...drivesData} />;
}
