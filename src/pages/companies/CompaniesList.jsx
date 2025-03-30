import React from "react";
import { ListEntitiesPage } from "../../components/common-components/ListEntitiesPage";
import { useNavigate } from "react-router-dom";

export default function CompaniesList() {
    const navigate = useNavigate();

    const getInvokeMethod = (companyID) => {
        const url = "/rep/companies/" + companyID;
        navigate(url);
    };

    const companiesData = {
        entity: "Companies",
        captionLine: "List of all companies",
        table: {
            columns: [
                { id: "companyID", label: "ID", minWidth: 70 },
                { id: "name", label: "Name", minWidth: 170 },
                {
                    id: "industry",
                    label: "Industry",
                    minWidth: 100,
                    align: "right",
                },
            ],
            rows: [
                {
                    companyID: 1,
                    name: "Company 1",
                    industry: "Tech",
                    invokeMethod: () => getInvokeMethod(1),
                },
                { companyID: 2, name: "Company 2", industry: "Finance" },
            ],
        }
    };
    return <ListEntitiesPage {...companiesData} />;
}
