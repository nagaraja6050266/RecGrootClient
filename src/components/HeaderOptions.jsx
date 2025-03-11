import { Edit } from "@mui/icons-material";
import { StatusComponent } from "./common-components/StatusComponent";
import { FlexBox, StyledButton } from "./common-components/styledComponents";

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
