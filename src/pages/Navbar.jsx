import { Box } from "@mui/material";
import { ThemeProvider } from "styled-components";
import AppNameComponent from "../components/common-components/AppNameComponent";
import { Theme } from "../components/common-components/styledComponents";
import MenuList from "../components/menu-bar-components/MenuList";

function Navbar() {
    return (
        <ThemeProvider theme={Theme}>
            <Box
                width="16%"
                height="100vh"
                position="fixed"
                top={0}
                mt={0}
                sx={{ bgcolor: "#00153D" }}
            >
                <AppNameComponent color="white" mt="30px" />
                <MenuList />
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;
