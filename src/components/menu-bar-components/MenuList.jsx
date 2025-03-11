import React, { useState } from "react";
import { Box, Divider, List, Paper } from "@mui/material";
import ListItemComponent from "./ListItemComponent";
import {
    DashboardRounded,
    School,
    Business,
    Event,
    CheckCircle,
    Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MenuItems = [
    {
        id: "dashboard",
        itemName: "Dashboard",
        icon: <DashboardRounded />,
        navigation: "/dashboard",
    },
    {
        itemName: "Students",
        icon: <School />,
        id: "student",
        navigation: "/rep/students",
    },
    {
        itemName: "Companies",
        icon: <Business />,
        id: "companies",
        navigation: "/rep/companies",
    },
    {
        itemName: "Drives",
        icon: <Event />,
        id: "drives",
        navigation: "/rep/drives",
    },
    {
        itemName: "Approvals",
        icon: <CheckCircle />,
        id: "approvals",
        navigation: "/rep/approvals",
    },
    {
        itemName: "Settings",
        icon: <Settings />,
        id: "settings",
        navigation: "/settings",
    },
];

export default function MenuList() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (index, navigation) => {
        setSelectedIndex(index);
        navigate(navigation);
    };

    return (
        <Box>
            <List component="nav" aria-label="main mailbox folders">
                {MenuItems.map((m, i) => (
                    <ListItemComponent
                        key={i}
                        index={i}
                        selected={selectedIndex}
                        itemName={m.itemName}
                        icon={m.icon}
                        handleFunction={() =>
                            handleListItemClick(i, m.navigation)
                        }
                    />
                ))}
            </List>
            <Divider
                variant="middle"
                sx={{ borderColor: "#00205C", borderWidth: "1px" }}
            />
        </Box>
    );
}
