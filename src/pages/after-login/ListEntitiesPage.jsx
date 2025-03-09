import { FlexBox } from "../../components/common-components/styledComponents";
import { Typography } from "@mui/material";
import CustomTable from "./CustomTable";

export function ListEntitiesPage({ entity, captionLine, table, options }) {
    return (
        <FlexBox m={2} flexDirection={"column"} alignItems={"flex-start"}>
            <Typography variant="h3" color="primary" fontWeight="bold">
                {entity}
            </Typography>
            <Typography variant="h5" color="textSecondary" mb={2}>
                {captionLine}
            </Typography>
            <CustomTable columns={table.columns} rows={table.rows} />
        </FlexBox>
    );
}
