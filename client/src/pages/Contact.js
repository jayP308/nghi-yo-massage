import React, { useState } from 'react';
import Header from "../components/Header"
import Sheet from '@mui/joy/Sheet';

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
            background: "transparent",
          }}
          variant="outlined"
        >
      <div className='contact-me'>
        <h1>Contact Me</h1>
        <form className='contact-form' onSubmit={handleSubmit}>
          <p id='name'>Name:</p>
          <input type='text' id='name-input' placeholder='Type Here......'/>

          <p id='name'>Phone Number:</p>
          <input type='number' id='name-input' placeholder='Type Here......'/>

          <p id='email'>Email Address:</p>
          <input type='email' id='email-input' placeholder='Type Here......' required/>

          <p id='email-error' className='error-message'></p>

          <p id='message'>Message:</p>
          <textarea
            type='text'
            id='message-input'
            placeholder='Type Here......'
            required
            onBlur={handleBlur}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
                width: "100%",
            }}
          />

          {isMessageEmpty && <p className='error-message'>Message cannot be empty</p>}

          <p></p>
          <button type='submit' id='submit-button'>Submit</button>
        </form>
      </div>
    </Sheet>
    </main>
    </div>
  );
};

export default ContactMe;