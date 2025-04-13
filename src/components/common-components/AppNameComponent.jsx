import { AppNameContainer, AppName } from "./styledComponents";
import appIcon from "../../assets/appIcon.png";
import { APP_NAME } from "../constants/Constants";

function AppNameComponent({ height, color, mt, ml, mr }) {
    return (
        <AppNameContainer $mt={mt} $ml={ml} $mr={mr}>
            <img
                src={appIcon}
                style={{ height: `${height ? height : "25px"}` }}
                alt="appIcon"
            />
            <AppName $color={color} $fontSize={height ? height : "20px"}>
                {APP_NAME}
            </AppName>
        </AppNameContainer>
    );
}

export default AppNameComponent;
