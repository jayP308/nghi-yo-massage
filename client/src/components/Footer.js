import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box sx={{ width: "100%",  }}>
      <BottomNavigation>
        <Typography>Made By Junnel R. Padilla ©</Typography>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;