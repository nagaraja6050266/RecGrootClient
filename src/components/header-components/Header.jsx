import { FlexBox } from "../common-components/styledComponents";
import OfficeLocation from "./OfficeLocation";
import DateAndTime from "./DateAndTime";
import UserProfile from "./UserProfile";

function Header() {
    return (
        <FlexBox marginBottom={"solid black 2px"} boxShadow={"solid black"} p={1} height="fit-content">
            <OfficeLocation />
            <FlexBox alignItems="center" gap={2} justifyContent="flex-end">
                <DateAndTime />
                <UserProfile />
            </FlexBox>
        </FlexBox>
    );
}

export default Header;
