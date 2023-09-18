import React from "react";

const Header = () => {
    return (
        <>
        
            <div
            style={{
                width: '75%',
                height: "50px",
                margin: 'auto',
                background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                backgroundSize: 'cover',
                textAlign: 'center',
                borderWidth: '5px',
                borderRadius: '10px',
            }}
            >
            <div>
                <a
                href="/"
                value='0'
                style={{
                    fontFamily: 'monospace',
                    padding: '25px',
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
                </a>
                {/* <Button
                href="/appointment"
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
                Appointment
                </Button> */}
                {/* <Button
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
                </Button> */}
                <a
                 href="/services"
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
                </a>
            </div>

            </div>
        </>
    );
};

export default Header;