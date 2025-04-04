import { FlexBox } from "./common-components/styledComponents";
import { FormHeader } from "./FormHeader";

export function EditPage({heading,subheading}){
    return <FlexBox flexDirection={"column"}>
        <FormHeader heading={heading} subheading={subheading} />
    </FlexBox>
}