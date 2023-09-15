import React from "react";
import Header from "../components/Header";
import Sheet from "@mui/joy/Sheet/Sheet";
import logoImage from "../assets/images/updated-logo4.png";
import subHeader from "../assets/images/subheader-massage.png";
import { Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const Home = () => {
    return (
        <>
            <Header/>

            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: 'auto',}}>
                <Sheet
                    sx={{
                    width: "30%",
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
                    my: 10, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    background: "#c0c0c0", // Add this line
                    textAlign:'center',
                    border: 'solid',
                    borderRadius: '10PX'
                }}
                >
                    <Typography style={{ fontWeight: "10px", fontSize: "45px", }}>Nghi Vo</Typography>
                    <Typography style={{ fontWeight: "10px", fontSize: "30px", }}>(Massage Therapist Student)</Typography>
                    
                    <Typography style={{ fontSize: '20px', fontFamily: 'monospace', padding:'20px',}}>
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