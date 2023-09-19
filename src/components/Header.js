import React from "react";
import { Button } from "@material-ui/core";
import { useMediaQuery } from 'usehooks-ts';

const Header = () => {
      const matches = useMediaQuery('(max-width: 480px)');
    return (
    <div>
        {matches ? (
       
        <div
            style={{
                width: '100%',
                height: "50px",
                margin: 'auto',
                background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                backgroundSize: 'cover',
                textAlign: 'center',
                borderRadius: '10px',
            }}
            >
            <div>
                <Button
                href="/nghi-yo-massage"
                value='0'
                style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    margin: 'auto',
                    fontWeight: "10px", 
                    fontSize: "15px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    borderRadius: '10px',
                    textDecoration: 'none',
                }}
                >
                Home  |
                </Button>
                <Button
                href="#type-of-massages"
                style={{
                    fontFamily: 'monospace',
                    padding: '5px',
                    margin: 'auto',
                    fontWeight: "10px", 
                    fontSize: "15px",  
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    borderRadius: '10px',
                }}
                >
                Massage Types  |
                </Button>
                <Button
                href="#social-media"
                style={{
                    fontFamily: 'monospace',
                    margin: 'auto',
                    fontWeight: "10px", 
                    fontSize: "15px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                }}
                >
                Contact  |
                </Button>
                <Button
                 href="#services"
                 style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    margin: 'auto',
                    fontWeight: "10px", 
                    fontSize: "15px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    textDecoration: 'none'
                }}
                >
                Services
                </Button>
            </div>

            </div>
        
        ) : (
        <>
            <div
            style={{
                width: '75%',
                height: "75px",
                margin: 'auto',
                background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                backgroundSize: 'cover',
                textAlign: 'center',
                borderWidth: '5px',
                borderRadius: '10px',
            }}
            >
            <div>
                <Button
                href="/nghi-yo-massage"
                value='0'
                style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    margin: 'auto',
                    fontWeight: "10px", 
                    fontSize: "30px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    borderRadius: '10px',
                    textDecoration: 'none',
                }}
                >
                Home  |
                </Button>
                <Button
                href="#type-of-massages"
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
                Massage Types  |
                </Button>
                <Button
                href="#social-media"
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
                Contact  |
                </Button>
                <Button
                 href="#services"
                 style={{
                    fontFamily: 'monospace',
                    padding: '7px',
                    marginRight: '10px',
                    fontWeight: "10px", 
                    fontSize: "30px", 
                    WebkitTextStroke: '.75px #1fc600', 
                    WebkitTextFillColor: 'black',
                    border: 'none',
                    textDecoration: 'none'
                }}
                >
                Services
                </Button>
            </div>

            </div>
        </>
        )}
            
        </div>
    );
};

export default Header;