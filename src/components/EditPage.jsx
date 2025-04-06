import { FlexBox, StyledButton } from "./common-components/styledComponents";
import { FormHeader } from "./FormHeader";
import { FormSegment } from "./FormSegment";

export function EditPage({ heading, subheading, fieldsJson = [] }) {
    return (
        <FlexBox pl={2} mt={2} alignItems={"flex-start"} flexDirection={"column"}>
            <FormHeader heading={heading} subheading={subheading} />
            <FlexBox
                width="70%"
                flexDirection={"column"}
            >
                {fieldsJson.map((segment, i) => (
                    <FormSegment
                        segmentHeader={segment.segmentHeader}
                        leftInput={segment.leftInput}
                        rightInput={segment.rightInput}
                    />
                ))}
            </FlexBox>
            <StyledButton sx={{ mt: 2 }} width="8%" variant="contained">
                Save
            </StyledButton>
        </FlexBox>
    );
}
