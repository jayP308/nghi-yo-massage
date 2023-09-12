import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoOne from "../assets/images/updated-logo4.png";



 const Signup = () => {
  return (
    <CssVarsProvider>
    <Header/>
      <main>
        
        <Sheet
          sx={{
            width: 800,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            border: "none",
            textAlign: 'center',
            background: "linear-gradient(to top, green, #e5e5e5, grey)", // Add this line
          }}
          variant="outlined"
        >
           <Typography 
            level="h4" 
            component="h1" 
            sx={{ 
              fontSize: "40px", marginBottom: "15px", WebkitTextStroke: '1px black', WebkitTextFillColor: '#1fc600', }}>
              <b>Services</b>
            </Typography>
          <img src={logoOne} alt="website logo of lotus" style={{ width: '50%', margin: "auto",}} />
          <div>
           
          </div>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Modalities</b>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
              <b>Includes: </b>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
              <b>( Sports Massage, Shiatsu Massage, and Reflexology )</b>
          </Typography>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Chair Massage</b>
          </Typography>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Foot Massage</b>
          </Typography>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Add-ons</b>
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
              <b>( Deep Tissue Massage, Reflexology, and Scalp Massage )</b>
          </Typography>
        </Sheet>
        <Typography
            endDecorator={<Link href="/contact">Contact Me Here</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center', justifyContent: 'center', marginBottom: '20px', fontFamily: 'monospace', fontSize: '15px', fontWeight: 'solid'}}
          >
            Questions? 
          </Typography>
      </main>
      
    </CssVarsProvider>
  );
}

export default Signup;