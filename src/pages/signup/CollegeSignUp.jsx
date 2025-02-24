import { Box } from "@mui/system";
import {
    CenteredBox,
    FlexBox,
    StyledButton,
    StyledSpan,
} from "../../components/styled-components/styledComponents";
import { Checkbox, Typography } from "@mui/material";
import { FormSegment } from "./FormSegment";

export function CollegeSignUp() {
    const fieldsJson = [
        {
            segmentHeader: "Institute Details",
            leftInput: [
                {
                    labelName: "Name",
                    inputId: "name",
                },
                {
                    labelName: "College Code",
                    inputId: "clgCode"
                },
            ],
        },
    ];

    return (
        <CenteredBox mt={10} mb={10}>
            <Box width="60%">
                <Box pl={0}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        Sign Up
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Enter your details below to create your account
                    </Typography>
                </Box>

                {fieldsJson.map((segment, i) => (
                    <FormSegment
                        segmentHeader={segment.segmentHeader}
                        leftInput={segment.leftInput}
                        rightInput={segment.rightInput}
                    />
                ))}

                {/* Terms and conditions agree box */}
                <FlexBox
                    alignItems="center"
                    justifyContent="left"
                    width="100%"
                    mt={1}
                >
                    <Checkbox
                        onChange={handleCheck}
                        size="small"
                        sx={{
                            "&.Mui-checked": {
                                color: "#00205c",
                            },
                        }}
                        defaultChecked
                    />
                    <Typography
                        width="fit-content"
                        variant="body1"
                        color="#5B738B"
                        align="left"
                        fontSize={12}
                    >
                        I agree to the{" "}
                        <StyledSpan
                            href="/signup"
                            textDecoration="underline"
                            color="#5B738B"
                        >
                            Terms and Conditions
                        </StyledSpan>
                    </Typography>
                </FlexBox>

                <FlexBox flexDirection="column" width="100%" mt={5}>
                    <FlexBox gap="20px">
                        <StyledButton variant="outlined" fullWidth>
                            Cancel
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            type="submit"
                            fullWidth
                        >
                            Sign Up
                        </StyledButton>
                    </FlexBox>
                    <Typography
                        variant="body1"
                        color="#5B738B"
                        mt={4}
                        align="center"
                        fontSize={12}
                    >
                        Already have an account ?{" "}
                        <StyledSpan href="/signin">Login</StyledSpan>
                    </Typography>
                </FlexBox>
            </Box>
        </CenteredBox>
    );
}
