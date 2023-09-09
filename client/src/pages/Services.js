import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logoOne from "../assets/images/website-logo1.jpg";



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
            background: "linear-gradient(to top, #e5e5e5, gray, #e5e5e5)", // Add this line
          }}
          variant="outlined"
        >
          <img src={logoOne} alt="website logo of lotus" />
          <div>
            <Typography 
            level="h4" 
            component="h1" 
            sx={{ 
              fontSize: "40px", marginBottom: "15px", color: '#1fc600', }}>
              <b>Services</b>
            </Typography>
          </div>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Swedish Massage</b>
          </Typography>
          <Typography sx={{ fontFamily: 'fantasy' }}>
              <b> - $40.00</b>
          </Typography>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>
              <b>Shiatsu Massage</b>
          </Typography>
          <Typography sx={{ fontFamily: 'fantasy' }}>
              <b> - $40.00</b>
          </Typography>
          <Typography
            endDecorator={<Link href="/contact">Contact Me Here</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Questions? 
          </Typography>
        </Sheet>

        
      </main>
      <Footer/>
    </CssVarsProvider>
  );
}

export default Signup;