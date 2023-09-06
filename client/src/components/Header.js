import React from "react";
import { Button, Typography} from "@material-ui/core";
import logoOne from "../assets/images/website-logo1.jpg";

const Header = () => {
    return (
        <>
        
            <div
            style={{
                width: "75%",
                margin: 'auto',
                background: "linear-gradient(to top, #e5e5e5, #0a5d00, #e5e5e5)", // Add this line
                backgroundSize: 'cover',
                textAlign: 'center',
                borderWidth: '5px',
            }}
            >
            <div>
                <Button
                href="/"
                style={{
                    fontSize: "20px",
                    fontFamily: 'monospace',
                    border: 'solid',
                    padding: '7px',
                    marginRight: '20px',
                    color: '#0eff00',
                    border: 'none',
                    borderRadius: '10px',
                }}
                >
                Home
                </Button>
                <Button
                href="/contact"
                style={{
                    fontSize: "20px",
                    fontFamily: 'monospace',
                    border: 'solid',
                    padding: '7px',
                    marginRight: '20px',
                    color: '#0eff00',
                    border: 'none',
                }}
                >
                Contact
                </Button>
                <Button
                 href="/signup"
                 style={{
                    fontSize: "20px",
                    fontFamily: 'monospace',
                    border: 'solid',
                    padding: '7px',
                    marginRight: '20px',
                    color: '#0eff00',
                    border: 'none',
                }}
                >
                Services
                </Button>
            </div>
            
            </div>
        </>
    );
};

export default Header;