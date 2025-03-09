import { FlexBox } from "../../components/styled-components/styledComponents";
import { Typography } from "@mui/material";

const headerJson = {
    title: "Details",
    subtitle: "Info Goes Here",
}

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
    {
        sectionHeader: "Contact Details",
        values: [
            {
                label: "Email",
                value: "sample@mail.com"
            },
            {
                label: "Phone",
                value: "1234567890"
            },
            {
                label: "Address",
                value: "123, 4th Cross, 5th Main, Bangalore"
            }
        ]
    }
];

function DetailsSegment({ detail, width }) {
    return (
        <FlexBox alignItems={"flex-start"} flexDirection={"column"} width={width}>
            <Typography mt={3} variant="h4" color="primary" fontWeight="bold">
                {detail.sectionHeader}
            </Typography>
            <FlexBox gap={2} mt={2}>
                <FlexBox flexDirection={"column"} width={"20%"} alignItems={"flex-end"}>
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
                <FlexBox flexDirection={"column"} width={"80%"} alignItems={"flex-start"}>
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

export default function DetailsViewComponent({ header = headerJson, details = detailsJson, width = "100%" }) {
    return (
        <FlexBox m={2} flexDirection={"column"} alignItems={"flex-start"} width={width}>
            <Typography variant="h3" color={"primary"}>{header.title}</Typography>
            <Typography variant="body3" color={"secondary"}>{header.subtitle}</Typography>
            {details.map((detail, i) => {
                return <DetailsSegment key={i} detail={detail} />;
            })}
        </FlexBox>
    );
}
