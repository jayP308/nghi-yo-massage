import React from "react";
import Header from "../components/Header";
import Sheet from "@mui/joy/Sheet/Sheet";
import logoImage from "../assets/images/website-logo1.jpg";
import { Typography } from "@material-ui/core";

const Home = () => {
    return (
        <>
            <Header/>

            <div style={{ display: 'flex' }}>
                <Sheet
                    sx={{
                    width: "30%",
                    maxHeight: "275px",
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                }}
                >
                    <img src={logoImage} alt="green lotus with tag nghi yo massage" />
                </Sheet>

                <Sheet
                    sx={{
                    width: "50%",
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                    background: "linear-gradient(to top, #e5e5e5, gray, #e5e5e5)", // Add this line
                    textAlign:'center'
                }}
                variant="outlined"
                >
                    <Typography style={{ fontWeight: "10px", fontSize: "45px", }}>About Me</Typography>
                    <Typography style={{ fontSize: '20px', fontFamily: 'monospace', padding:'20px',}}>
                    Hello! My name is Nghi Vo, like your "knee" and you can't forget me because Im part of you!<br></br>
                    <br></br>
                    My journey into massage therapy has been both fascinating and fulfilling. 
                    As a student in this field, I'm passionate about using the power of touch to help people find relief from physical discomfort and stress. 
                    Learning the art of massage has given me a deep appreciation for the body's ability to heal itself and the importance of maintaining a mind-body connection. 
                    I look forward to using my skills to make a positive impact on the lives of others, one soothing massage at a time.
                        </Typography>
                </Sheet>
            </div>
        </>
    );
}

export default Home;