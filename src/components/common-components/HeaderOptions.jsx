import { Edit } from "@mui/icons-material";
import { StatusComponent } from "./StatusComponent";
import { FlexBox, StyledButton } from "./styledComponents";

export default function HeaderOptions({ options }) {
    return (
        <>
            {options.edit && (
                <StyledButton
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={options.edit.invokeMethod}
                />
            )}
        </>
    );
}
