import { FlexBox } from "../common-components/styledComponents";
import OfficeLocation from "./OfficeLocation";
import DateAndTime from "./DateAndTime";
import UserProfile from "./UserProfile";

function Header() {
    return (
        <FlexBox pt={1} pb={1} height="fit-content" width="100%">
            <OfficeLocation />
            <FlexBox alignItems="center" gap={2} justifyContent="flex-end">
                <DateAndTime />
                <UserProfile />
            </FlexBox>
        </FlexBox>
    );
}

export default Header;
