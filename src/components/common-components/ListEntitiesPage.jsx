import { FlexBox } from "./styledComponents";
import { Typography } from "@mui/material";
import CustomTable from "../CustomTable";
import HeaderOptions from "./HeaderOptions";
import { FormHeader } from "../FormHeader";

const defaultOptions = {
    add: {
    }
}

export function ListEntitiesPage({ entity, captionLine, table, options = defaultOptions}) {
    return (
        <FlexBox flexDirection={"column"} p={2}>
            <FlexBox>
            <FormHeader heading={entity} subheading={captionLine} />
            <FlexBox>
                <HeaderOptions options={options} />
            </FlexBox>
            </FlexBox>
            <CustomTable columns={table.columns} rows={table.rows} />
        </FlexBox>
    );
}
