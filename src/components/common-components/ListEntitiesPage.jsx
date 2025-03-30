import { FlexBox } from "./styledComponents";
import { Typography } from "@mui/material";
import CustomTable from "../CustomTable";
import HeaderOptions from "./HeaderOptions";

const defaultOptions = {
    add: {
    }
}

export function ListEntitiesPage({ entity, captionLine, table, options = defaultOptions}) {
    return (
        <FlexBox flexDirection={"column"} p={2}>
            <FlexBox>
            <FlexBox flexDirection={"column"} alignItems={"flex-start"}>
                <Typography variant="h3" color="primary" fontWeight="bold">
                    {entity}
                </Typography>
                <Typography variant="h5" color="textSecondary" mb={2}>
                    {captionLine}
                </Typography>
            </FlexBox>
            <FlexBox>
                <HeaderOptions options={options} />
            </FlexBox>
            </FlexBox>
            <CustomTable columns={table.columns} rows={table.rows} />
        </FlexBox>
    );
}
