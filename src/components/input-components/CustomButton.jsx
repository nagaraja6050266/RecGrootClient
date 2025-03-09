import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton({
    content = "Add",
    width = "fit-content",
    height = "fit-content",
    icon
}) {
    return (
        <Stack spacing={2} direction="row" sx={{ marginLeft: "15px" }}>
            <Button
                sx={{
                    padding: "8px",
                    width: { width },
                    height: { height },
                    bgcolor: "#00205C",
                    borderRadius: "10px",
                    fontSize: "17x",
                }}
                variant="contained"
                startIcon={icon}
            >
                {content}
            </Button>
        </Stack>
    );
}
