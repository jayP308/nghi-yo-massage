import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@material-ui/core';
import instaLogo from '../assets/images/instagram-logo.png';

const Footer = () => {
  return (
    <Box>
      <BottomNavigation style={{display: 'block', background: 'transparent', height: '150px', margin: 'auto', textAlign: 'center', padding: '15px'}}>
      <Typography>Follow my Social Media for more updates!</Typography>
        <div style={{ display: 'flex', margin: 'auto', textAlign: 'center', width: '10%'}}>
            <a href='https://www.instagram.com/nghi_yo_massage/' >
              <img src={instaLogo} alt="pink intagram logo" style={{ width: '30%', marginTop: '10px',}}/>
            </a>
        </div>
        <Typography style={{padding: "12px"}}>Made by Junnel R. Padilla ©</Typography>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;