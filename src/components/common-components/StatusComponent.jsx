import { Typography } from "@mui/material";
import { FlexBox } from "./styledComponents";
import { useEffect,useState } from "react";

export function StatusComponent({ status = "Open" }) {
    const [statusJson, setStatusJson] = useState({});

    const getColor = (status) => {
        switch (status) {
            case "Open":
                return "green";
            case "Closed":
                return "red";
            case "In Progress":
                return "yellow";
            default:
                return "blue";
        }
    };

    useEffect(() => {
        const color = getColor(status);
        setStatusJson({ statusTxt: status, color: color });
    }, [status]);

    return (
        <FlexBox gap={.5} width={"fit-content"} pr={5}>
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: statusJson.color,
                    animation: "blink 1s infinite"
                }}
            ></div>
            <style>
                {`
                    @keyframes blink {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
            <Typography variant="body3" color={statusJson.color}>{statusJson.statusTxt}</Typography>
        </FlexBox>
    );
}
