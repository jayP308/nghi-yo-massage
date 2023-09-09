import React from "react";
import { Button} from "@material-ui/core";

const Header = () => {
    return (
        <>
        
            <div
            style={{
                width: "75%",
                height: "75px",
                margin: 'auto',
                background: "linear-gradient(to top, #e5e5e5, green, #e5e5e5)", // Add this line
                backgroundSize: 'cover',
                textAlign: 'center',
                borderWidth: '5px',
            }}
            >
            <div>
                <Button
                href="/"
                style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    marginRight: '20px',
                    fontWeight: "10px", 
                    fontSize: "30px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    borderRadius: '10px',
                }}
                >
                Home
                </Button>
                <Button
                href="/contact"
                style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    marginRight: '20px',
                    fontWeight: "10px", 
                    fontSize: "30px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                }}
                >
                Contact
                </Button>
                <Button
                 href="/services"
                 style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    marginRight: '20px',
                    fontWeight: "10px", 
                    fontSize: "30px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
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