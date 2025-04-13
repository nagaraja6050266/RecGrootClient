import { Edit } from "@mui/icons-material";
import { StatusComponent } from "./StatusComponent";
import { FlexBox, StyledButton } from "./styledComponents";
import { Typography } from "@mui/material";
import HeaderOptions from "./HeaderOptions";
import { FormHeader } from "../FormHeader";

const headerJson = {
    title: "Details",
    subtitle: "Info Goes Here",
    status: "Open",
    options: {
        edit: {},
    },
};

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
                value: "sample@mail.com",
            },
            {
                label: "Phone",
                value: "1234567890",
            },
            {
                label: "Address",
                value: "123, 4th Cross, 5th Main, Bangalore",
            },
        ],
    },
];

function DetailsSegment({ detail, width }) {
    return (
        <FlexBox
            alignItems={"flex-start"}
            my={2}
            p={2}
            flexDirection={"column"}
            width={width}
            shadow={true}
        >
            <Typography variant="h4" color="primary" fontWeight="bold">
                {detail.sectionHeader}
            </Typography>
            <FlexBox gap={2} mt={2}>
                <FlexBox
                    flexDirection={"column"}
                    width={"20%"}
                    alignItems={"flex-end"}
                >
                    {detail.values.map((value, i) => {
                        return (
                            <Typography
                                key={i}
                                fontSize={20}
                                fontWeight={"bold"}
                                color={"secondary"}
                            >
                                {value.label}
                            </Typography>
                        );
                    })}
                </FlexBox>
                <FlexBox
                    flexDirection={"column"}
                    width={"80%"}
                    alignItems={"flex-start"}
                >
                    {detail.values.map((value, i) => {
                        return (
                            <Typography key={i} fontSize={20}>
                                {value.value}
                            </Typography>
                        );
                    })}
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}

export default function DetailsViewComponent({
    header = headerJson,
    details = detailsJson,
    width = "100%",
}) {
    return (
        <FlexBox
            p={2}
            flexDirection={"column"}
            alignItems={"flex-start"}
            width={width}
        >
            <FlexBox alignItems={"space-between"}>
                <FormHeader
                    style={{ pb: "0" }}
                    heading={header.title}
                    subheading={header.subtitle}
                />
                <FlexBox gap={2} width={"max-content"}>
                    <HeaderOptions options={header.options} />
                    <StatusComponent status={header.status} />
                </FlexBox>
            </FlexBox>
            {details.map((detail, i) => {
                return <DetailsSegment key={i} detail={detail} />;
            })}
        </FlexBox>
    );
}
