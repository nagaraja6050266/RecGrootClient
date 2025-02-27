import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({
    content = "Add",
    width = "fit-content",
    height = "fit-content",
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
                startIcon={<AddIcon />}
            >
                {content}
            </Button>
        </Stack>
    );
}
