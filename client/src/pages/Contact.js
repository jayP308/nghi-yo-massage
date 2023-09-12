import React, { useState } from 'react';
import Header from "../components/Header"
import Sheet from '@mui/joy/Sheet';
import logoImage from "../assets/images/updated-logo4.png"

const ContactMe = () => {
  const [message, setMessage] = useState('');
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  const handleBlur = () => {
    setIsMessageEmpty(message.trim() === '');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.trim() === '') {
      setIsMessageEmpty(true);
      return;
    }
  };

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
      <img 
      src={logoImage} 
      alt="green lotus logo" 
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        marginTop: '180px',
        marginRight: '30px',
        width: '40%',
      }}
      />
      <div className='contact-me'>
        <h1 style={{ fontWeight: "10px", fontSize: "45px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', textAlign: 'center', }}>Contact Me</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <p id='name' style={{fontSize: "20px"}}>Full Name:</p>
          <input type='text' id='name-input' placeholder='Type Here......' style={{ width: '50%', height: '25px', fontSize: '20px'}}/>

          <p id='name' style={{fontSize: "20px"}}>Phone Number:</p>
          <input type='phone' id='name-input' placeholder='Type Here......' style={{ width: '50%', height: '25px', fontSize: '20px'}}/>

          <p id='email' style={{fontSize: "20px"}}>Email Address:</p>
          <input type='email' id='email-input' placeholder='Type Here......' required style={{ width: '50%', height: '25px', fontSize: '20px'}}/>

          <p id='email-error' className='error-message'></p>

          <p id='message' style={{fontSize: "20px"}}>Message:</p>
          <textarea
            type='text'
            id='message-input'
            placeholder='Type Here......'
            required
            onBlur={handleBlur}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '75%', height: '150px', fontSize: '15px', resize: 'none'}}
          />

          {isMessageEmpty && <p className='error-message'>Message cannot be empty</p>}

          <p></p>
          <button type='submit' id='submit-button' style={{ fontSize: '25px', border: "solid", borderColor: 'green'}}>Submit</button>
        </form>
      </div>
    </Sheet>
    </main>
    </div>
  );
};

export default ContactMe;