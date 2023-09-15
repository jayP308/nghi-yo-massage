import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Header from '../components/Header';
import logoOne from "../assets/images/updated-logo4.png";



 const Services = () => {
  return (
    <CssVarsProvider>
    <Header/>
      <main>
      <Sheet
          sx={{
            width: 700,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 1, // padding top & bottom
            px: 1, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            border: 'double',
            borderColor: 'rgba(10, 92, 51, 0.699)',
            borderWidth: "5px",
            textAlign: 'center',
            backgroundColor: 'rgba(182, 182, 158, 0.671)',
            
          }}
          variant="outlined"
        > <h1 style={{ fontWeight: "10px", fontSize: "45px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>Services</h1></Sheet>
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
            textAlign: 'center',
            backgroundColor: 'rgba(182, 182, 158, 0.671)',
            border: 'double',
            borderColor: 'rgba(10, 92, 51, 0.699)',
            borderWidth: "5px"
          }}
          variant="outlined"
        >
           
          <img src={logoOne} alt="website logo of lotus" style={{ width: '50%', margin: "auto",}} />
          <div>
           
          </div>
          <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', color: 'black' }}>
              <b>Modalities</b>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: 'black' }}>
              <b>Includes: </b>
          </Typography>
          <Typography sx={{ fontSize: "20px", color: 'black' }}>
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
          <div style={{ display: "block", margin: "auto"}}>
          <Typography sx={{ fontSize: "20px", color: 'black' }}>
                <b> Swedish Massage</b>
            </Typography>
            <Typography sx={{ fontSize: "20px", color: 'black' }}>
                <b> Deep Tissue Massage</b>
            </Typography>
            <Typography sx={{ fontSize: "20px", color: 'black' }}>
                <b> Reflexology</b>
            </Typography>
            <Typography sx={{ fontSize: "20px", color: 'black' }}>
                <b> Scalp Massage</b>
            </Typography>
          </div>
          <Typography
            endDecorator={<Link href="/contact" style={{ textDecoration: 'underline'}}>Contact Me Here</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center', justifyContent: 'center', fontSize: "15px",}}
          >
            Questions? 
          </Typography>
        </Sheet>
      </main>
      
    </CssVarsProvider>
  );
}

export default Services;