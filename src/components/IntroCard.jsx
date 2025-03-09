import { StyledCard } from "./common-components/styledComponents";
import AppNameComponent from "./common-components/AppNameComponent";

function IntroCard() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StyledCard>
                <AppNameComponent />
            </StyledCard>
        </div>
    );
}

export default IntroCard;
