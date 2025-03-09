import React from "react";
import { ListEntitiesPage } from "../../components/common-components/ListEntitiesPage";
import { useNavigate } from "react-router-dom";

export default function StudentsList() {
    const navigate = useNavigate();

    const getInvokeMethod = (studentID) => {
        const url = "/rep/students/" + studentID;
        navigate(url);
    };

    const studentsData = {
        entity: "Students",
        captionLine: "List of all students",
        table: {
            columns: [
                { id: "studentID", label: "ID", minWidth: 70 },
                { id: "name", label: "Name", minWidth: 170 },
                { id: "age", label: "Age", minWidth: 100, align: "right" },
                { id: "grade", label: "Grade", minWidth: 100, align: "right" },
                {
                    id: "placement",
                    label: "Placement",
                    minWidth: 100,
                    align: "right",
                },
            ],
            rows: [
                {
                    studentID: 1,
                    name: "John Doe",
                    age: 20,
                    grade: "A",
                    invokeMethod: () => getInvokeMethod(1),
                },
                { studentID: 2, name: "Jane Smith", age: 22, grade: "B" },
            ],
        },
        options: {},
    };
    return <ListEntitiesPage {...studentsData} />;
}
