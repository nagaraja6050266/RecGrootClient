import { FlexBox } from "./common-components/styledComponents";
import { FormHeader } from "./FormHeader";
import { FormSegment } from "./FormSegment";

export function EditPage({ heading, subheading, fieldsJson = [] }) {
    return (
        <FlexBox flexDirection={"column"}>
            <FormHeader heading={heading} subheading={subheading} />
            {fieldsJson.map((segment, i) => (
                <FormSegment
                    segmentHeader={segment.segmentHeader}
                    leftInput={segment.leftInput}
                    rightInput={segment.rightInput}
                />
            ))}
        </FlexBox>
    );
}
