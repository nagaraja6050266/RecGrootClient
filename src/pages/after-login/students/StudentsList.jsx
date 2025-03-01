import React from "react";
import { ListEntitiesPage } from "../ListEntitiesPage";

const studentsData = {
    entity: "Students",
    captionLine: "List of all students",
    table: {
        columns: [
            { id: "studentID", label: "ID", minWidth: 100 },
            { id: "name", label: "Name", minWidth: 170 },
            { id: "age", label: "Age", minWidth: 100, align: "right" },
            { id: "grade", label: "Grade", minWidth: 100, align: "right" },
        ],
        rows: [
            { studentID: 1, name: "John Doe", age: 20, grade: "A" },
            { studentID: 2, name: "Jane Smith", age: 22, grade: "B" },
        ],
    },
    options: {},
};

export default function StudentsList() {
    return <ListEntitiesPage {...studentsData} />;
}