import React from "react";
import { Button, Typography, } from "@material-ui/core";


const Header = () => {
    return (
        <>
            <div
            style={{
                width: "100%",
                height: "150px",
                marginBottom: "25px",
                background: "#228B22",
                textAlign: 'center',
            }}
            >

            <Typography
            style={{
                fontSize: "45px",
                fontFamily: 'monospace',
                marginTop: '10px',
                marginBottom: '10px',
            }}
            >
            NGHI YO MASSAGE
            </Typography>

            <div>
                <Button
                href="/login"
                style={{
                    fontSize: "20px",
                    fontFamily: 'monospace',
                    border: 'solid',
                    padding: '7px',
                    marginRight: '20px',
                    color: 'black'
                }}
                >
                Login
                </Button>
                <Button
                 href="/signup"
                 style={{
                    fontSize: "20px",
                    fontFamily: 'monospace',
                    border: 'solid',
                    padding: '7px',
                    marginRight: '20px'
                }}
                >
                Signup
                </Button>
            </div>
            
            </div>
        </>
    );
};

export default Header;