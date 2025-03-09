import Navbar from "./Navbar";
import Header from "../../components/header-components/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function MainComponent() {
    return (
        <>
            <Navbar />
            <Box sx={{ ml: "16%", backgroundColor: "white", height: "100vh" }}>
                <Header />
                <Outlet />
            </Box>
        </>
    );
}

export default MainComponent;
