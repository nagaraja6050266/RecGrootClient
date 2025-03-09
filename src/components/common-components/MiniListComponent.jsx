import { Typography } from "@mui/material";
import { FlexBox } from "./styledComponents";

const miniListContent = {
    mainTxt: "Student Name",
    subTxt: "Student ID",
    rightTxt: "Status",
    bottomLines: {
        "Course Name": "CSE",
        "Course ID": "CSE101",
        "Course Status": "Active",
    },
};

export default function MiniListComponent(listContent) {
    listContent = miniListContent;
    return (
        <FlexBox border={"solid black 2px"} p={2}>
            <FlexBox>
                <FlexBox>
                    <Typography variant="h6">{listContent.mainTxt}</Typography>
                    <h3>{listContent.subTxt}</h3>
                </FlexBox>
                <h3>{listContent.rightTopTxt}</h3>
            </FlexBox>
            <FlexBox>
                <h3>{Object.keys(listContent.bottomLines)[0]}</h3>
                <h3>{Object.keys(listContent.bottomLines)[1]}</h3>
                <h3>{Object.keys(listContent.bottomLines)[2]}</h3>
            </FlexBox>
            <FlexBox>
                <h3>{listContent.bottomLines["Course Name"]}</h3>
                <h3>{listContent.bottomLines["Course ID"]}</h3>
                <h3>{listContent.bottomLines["Course Status"]}</h3>
            </FlexBox>
        </FlexBox>
    );
}
