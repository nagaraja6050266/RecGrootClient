import React from "react";
import { ListEntitiesPage } from "../../components/common-components/ListEntitiesPage";
import { useNavigate } from "react-router-dom";

export default function ApprovalsList() {
    const navigate = useNavigate();

    const getInvokeMethod = (approvalID) => {
        const url = "/rep/approvals/" + approvalID;
        navigate(url);
    };

    const approvalsData = {
        entity: "Approvals",
        captionLine: "List of all approvals",
        table: {
            columns: [
                { id: "approvalID", label: "ID", minWidth: 70 },
                { id: "name", label: "Name", minWidth: 170 },
                {
                    id: "status",
                    label: "Status",
                    minWidth: 100,
                    align: "right",
                },
            ],
            rows: [
                {
                    approvalID: 1,
                    name: "Approval 1",
                    status: "Pending",
                    invokeMethod: () => getInvokeMethod(1),
                },
                { approvalID: 2, name: "Approval 2", status: "Approved" },
            ],
        },
        options: {},
    };
    return <ListEntitiesPage {...approvalsData} />;
}
