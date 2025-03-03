import { FlexBox } from "../../components/styled-components/styledComponents";
import { Typography } from "@mui/material";
import CustomTable from "./CustomTable";

export function ListEntitiesPage({ entity, captionLine, table, options }) {
    return (
        <FlexBox m={2} flexDirection={"column"} alignItems={"flex-start"}>
            <Typography variant="h5" color="primary" fontWeight="bold">
                {entity}
            </Typography>
            <Typography variant="body2" color="textSecondary"  mb={2}>
                {captionLine}
            </Typography>
            <CustomTable columns={table.columns} rows={table.rows} />
        </FlexBox>
    );  
}
