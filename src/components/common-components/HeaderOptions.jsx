import { Add, Edit } from "@mui/icons-material";
import { FlexBox, StyledButton } from "./styledComponents";

const defaultInvokeMethod = (button) => {
    alert("Default " + button + " button clicked");
};

export default function HeaderOptions({ options }) {
    return (
        <FlexBox>
            {options.edit && (
                <StyledButton
                    variant="outlined"
                    startIcon={<Edit />}
                    onClick={
                        options.edit.invokeMethod || defaultInvokeMethod("Edit")
                    }
                />
            )}
            {options.add && (
                <StyledButton
                    variant="outlined"
                    startIcon={<Add />}
                    onClick={
                        options.add.invokeMethod || defaultInvokeMethod("Add")
                    }
                >
                    Add
                </StyledButton>
            )}
        </FlexBox>
    );
}
