import React from 'react';
import { Typography, Link} from '@mui/joy';
import Header from "../components/Header"
import Sheet from '@mui/joy/Sheet';


const Appointment = () => {

  return (
    <div>
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
            background: "linear-gradient(to top, green, #e5e5e5, grey)", // Add this line
          }}
          variant="outlined"
        >
      <div className='appointment'>
        <h1 style={{ fontWeight: "10px", fontSize: "45px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', textAlign: 'center', }}>Make An Appointment</h1>
        <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', textAlign: "center" }}>
              <b>Coming Soon!</b>
        </Typography>
      </div>
    </Sheet>
    <Typography
        endDecorator={<Link href="https://www.instagram.com/nghi_yo_massage/s">Click here!</Link>}
        fontSize="sm"
        sx={{ alignSelf: 'center', justifyContent: 'center', marginBottom: '20px', fontFamily: 'monospace', fontSize: '15px', fontWeight: 'solid'}}
        >
        Follow my instagram for updates!
    </Typography>
    </main>
    </div>
  );
};

export default Appointment;