import { FlexBox } from "../../components/styled-components/styledComponents";
import { Typography } from "@mui/material";

const detailsJson = [
    {
        sectionHeader: "Personal Info",
        values: [
            {
                label: "Name",
                value: "Nagaraja",
            },
            {
                label: "DOB",
                value: "234567",
            },
        ],
    },
];

function DetailsSegment({ detail, width }) {
    return (
        <FlexBox m={3} alignItems={"flex-start"} flexDirection={"column"} width={width}>
            <Typography mt={3} variant="h4" color="primary" fontWeight="bold">
                {detail.sectionHeader}
            </Typography>
            <FlexBox gap={2} mt={2}>
                <FlexBox flexDirection={"column"} width={"40%"} alignItems={"flex-end"}>
                    {detail.values.map((value) => {
                        return (
                            <Typography
                                fontSize={20}
                                fontWeight={"bold"}
                                color={"secondary"}
                            >
                                {value.label}
                            </Typography>
                        );
                    })}
                </FlexBox>
                <FlexBox flexDirection={"column"} width={"60%"} alignItems={"flex-start"}>
                    {detail.values.map((value) => {
                        return (
                            <Typography fontSize={20}>{value.value}</Typography>
                        );
                    })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}

export default function DetailsViewComponent({ details = detailsJson, width = "100hw" }) {
    return (
        <>
            {details.map((detail, i) => {
                return <DetailsSegment key={i} detail={detail} width={width} />;
            })}
        </>
    );
}
