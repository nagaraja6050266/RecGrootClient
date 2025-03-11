import { FlexBox } from "../common-components/styledComponents";
import { Typography, Box } from "@mui/material";
import userProfile from "../../assets/userProfile.png";

const defaultProfile = {
    name: "UserName",
    type: "UserType",
}

function UserProfile({profile = defaultProfile}) {
    return (
        <FlexBox width={"fit-content"} height={40}gap={1}>
            <Box flexDirection="column" justifyContent="left">
                <Typography fontWeight={600} fontSize={15}>
                    {profile.name}
                </Typography>
                <Typography variant="body2" fontSize={10} color="#5B738B">
                    {profile.type}
                </Typography>
            </Box>
            <img width="auto" height="100%" src={userProfile} alt="profile" />
        </FlexBox>
    );
}

export default UserProfile;
