import { Box, Typography } from "@mui/material";

export function FormHeader({ heading = "Heading", subheading, style = {} }) {
    return (
        <Box width={"100%"} pl={0} pb={style.pb || 1}>
            <Typography variant="h2" color={"primary"}>
                {heading}
            </Typography>
            {subheading && (
                <Typography variant="h6" color="textSecondary">
                    {subheading}
                </Typography>
            )}
        </Box>
    );
}
