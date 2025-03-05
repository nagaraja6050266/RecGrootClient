import { FlexBox } from "../../components/styled-components/styledComponents";
import { Typography } from "@mui/material";


const detailsJson = [{
    sectionHeader: "Personal Info",
    values: [
        {
            label: "Name",
            value: "Nagaraja"
        },
        {
            label: "DOB",
            value: "234567"
        }
    ]
}];

function DetailsSegment({detail}){
    return <FlexBox m={2} alignItems={"flex-start"} flexDirection={"column"}>
        <Typography mt={3} variant="h4" color="primary" fontWeight="bold">
                {detail.sectionHeader}
        </Typography>
        <FlexBox flexDirection={"column"}>
            {detail.values.map((value) => {
                return <FlexBox>
                    <Typography fontSize={25} color={"secondary"}>{value.label}</Typography>
                    <Typography fontSize={25}>{value.value}</Typography>
                </FlexBox>
            })}
        </FlexBox>
    </FlexBox>
}

export default function DetailsViewComponent({details = detailsJson}) {
    return (
        <>
            {details.map((detail, i) => {
                return <DetailsSegment key={i} detail={detail} />;
            })}
        </>
    );
}