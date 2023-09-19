import React from "react";
import Header from "../components/Header";
import Sheet from "@mui/joy/Sheet/Sheet";
import logoImage from "../assets/images/updated-logo4.png";
import { Typography } from "@mui/joy";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Footer from '../components/Footer';
import dividerImg from '../assets/images/divider.png';
import logoOne from "../assets/images/updated-logo4.png";
import { CssVarsProvider } from "@mui/joy";
import { useMediaQuery } from 'usehooks-ts'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Sports Massage',
    imgPath:
      'https://cdn.pixabay.com/photo/2017/09/20/14/59/massage-2768833_960_720.jpg',
    descriptions: "Sports massage is a targeted form of therapy that uses various techniques like deep tissue and stretching to enhance athletic performance, reduce muscle tension, improve flexibility, and aid in injury prevention and recovery. It's particularly beneficial for athletes, as it helps with circulation, pain relief, and stress reduction, ultimately optimizing physical well-being and sports performance.",
  },
  {
    label: 'Shiatsu Massage',
    imgPath:
      'https://media.istockphoto.com/id/1456027414/photo/neck-massage.webp?b=1&s=170667a&w=0&k=20&c=-crVT9ZQoA5riC0go6dMDiDe_Ll4-Z_mp2ZkRLPaqrQ=',
    descriptions: "Shiatsu massage is a Japanese bodywork therapy that involves applying pressure to specific points on the body using fingers, thumbs, and palms. This technique aims to balance the body's energy flow, or 'qi', and promote relaxation and well-being. Shiatsu is often performed on a floor mat and combines stretches and joint rotations with pressure point work, making it a holistic therapy that can help relieve stress, alleviate muscle tension, and improve overall health by enhancing the body's natural healing abilities."
    },
  {
    label: 'Reflexology',
    imgPath:
      'https://media.istockphoto.com/id/611744200/photo/foot-massage.webp?b=1&s=170667a&w=0&k=20&c=TJNDO9xETDkWJEeHCiYCqmqta-UYXBEkqg9Ufqs7E5k=',
    descriptions: "Reflexology is a holistic therapeutic practice that involves applying pressure to specific points on the feet, hands, or ears, known as reflex points, which correspond to various organs and systems in the body. By stimulating these reflex points, reflexologists aim to promote relaxation, reduce stress, and improve overall well-being. This ancient technique is based on the principle that specific areas on the feet, hands, or ears are connected to other parts of the body, and by manipulating these points, it can help alleviate tension, enhance circulation, and support the body's natural healing processes.",
    },
  {
    label: 'Swedish Massage',
    imgPath:
      'https://media.istockphoto.com/id/121673933/photo/massage.jpg?s=612x612&w=0&k=20&c=B6T43QicaCXTOhBTMGbLxkpD2P2nXhTjDW_8q7gWITY=',
    descriptions: "Swedish massage is a widely practiced therapeutic technique that uses a combination of long gliding strokes, kneading, friction, tapping, and gentle stretching to promote relaxation and alleviate muscle tension. It is characterized by its soothing and rhythmic movements, making it an ideal choice for those seeking stress relief and relaxation. Swedish massage can also improve circulation, reduce muscle soreness, and enhance overall physical and mental well-being."
  },
  {
    label: 'Deep Tissue Massage',
    imgPath:
      'https://media.istockphoto.com/id/1251958800/photo/physical-therapist-pressing-or-pushing-on-lower-back-maknig-deep-massage.webp?b=1&s=170667a&w=0&k=20&c=yaSGmyWBrLznvU2F5i0Crwwn32a7bLuqkbDlXdlIYTk=',
    descriptions: "Deep tissue massage is an intensive therapeutic technique that focuses on reaching the deeper layers of muscle and connective tissue. This massage style uses firm pressure, slow strokes, and concentrated friction to target chronic tension, knots, and adhesions in the muscles. Deep tissue massage is particularly effective for individuals with chronic pain, muscle tightness, or injuries. It aims to break down scar tissue, improve range of motion, and provide relief from deep-seated muscle discomfort, making it a valuable choice for those seeking deep muscle relaxation and pain relief.",
  },
  {
    label: 'Chair Massage',
    imgPath:
      'https://media.istockphoto.com/id/599867322/photo/physiotherapist-giving-back-massage-to-a-patient.webp?b=1&s=170667a&w=0&k=20&c=Hjjqq693xV9Yjzfpyjx2T0ku_pm4NaifFASE_qqiMYU=',
    descriptions: "Chair massage is a convenient and compact form of massage therapy that typically takes place in a specially designed chair. During a chair massage, the recipient remains fully clothed and sits in a forward-leaning position while a massage therapist focuses on the neck, shoulders, back, and arms. This brief but effective massage technique aims to relieve tension and reduce stress in key areas of the body commonly affected by everyday activities and sedentary work. Chair massages are often found in workplaces, airports, and public events, offering a quick and accessible way to relax and rejuvenate without the need for a traditional massage table or disrobing.",
  },
];

const Home = () => {
    const matches = useMediaQuery('(max-width: 480px)')

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
    <div className="Home">
      <Header/>
      {matches ? (
        <>
            <div style={{ display: 'block', justifyContent: "center", alignItems: "center", margin: 'auto',}}>
                <Sheet
                    sx={{
                    width: "50%",
                    mx: 'auto', // margin left & right
                    my: 3, // margin top & bottom
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                }}
                >
                    <img src={logoImage} alt="green lotus with tag nghi yo massage" />
                </Sheet>

                <Sheet
                    sx={{
                    width: "100%",
                    mx: 'auto', // margin left & right
                    my: 5, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 3, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    borderRadius: 'sm',
                    background: "#c0c0c0", // Add this line
                    textAlign:'center',
                    backgroundColor: 'rgba(182, 182, 158, 0.671)',
                    border: 'double',
                    borderColor: 'rgba(10, 92, 51, 0.699)',
                    borderWidth: "5px", 
                    color: "black",
                }}
                >
                    <Typography style={{ fontWeight: "10px", fontSize: "45px", }}>Nghi Vo</Typography>
                    <Typography style={{ fontWeight: "10px", fontSize: "25px", }}>(Massage Therapist Student)</Typography>
                    
                    <Typography style={{ fontSize: '20px', fontFamily: 'monospace', padding:'20px', fontStyle: 'oblique'}}>
                    My journey into massage therapy has been both fascinating and fulfilling. 
                    As a student in this field, I'm passionate about using the power of touch to help people find relief from physical discomfort and stress. 
                    Learning the art of massage has given me a deep appreciation for the body's ability to heal itself and the importance of maintaining a mind-body connection. 
                    I look forward to using my skills to make a positive impact on the lives of others, one soothing massage at a time.
                    </Typography>
                    <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto'}} />
                </Sheet>
            </div>
            
            <hr id="type-of-massages" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
           
            <div
             style={{
              display: 'block',
              width: "100%",
              margin: 'auto',
              mx: 'auto', // margin left & right
              background: 'transparent',
             

            }}
            >

              <Box sx={{ 
                  width: "100%", 
                  flexGrow: 1, 
                  margin: 'auto',
                  marginTop: "40px",
                  marginBottom: "40px",
                  border: 'double',
                  backgroundColor: 'rgba(182, 182, 158, 0.671)',
                  borderColor: 'rgba(10, 92, 51, 0.699)',
                  borderWidth: "5px",
                  }}>
                    
                  <Paper
                      square
                      elevation={0}
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      margin: 'auto',
                      background: "linear-gradient(to bottom, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                      justifyContent: 'center',
                      padding: '10px'
                      }}
                  >
                    <h1 style={{ fontWeight: "10px", fontSize: "30px", padding: '25px', WebkitTextFillColor: 'black', }}>Type of Massages</h1>
                    <Typography style={{fontFamily: 'monospace', fontSize: '15px',}}>{images.label}</Typography>
                  </Paper>
                  
                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={10000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            
                              <Box
                              sx={{
                                  height: 450,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                                  textAlign: "center",
                                  fontFamily: 'monospace',
                                  fontSize: '15px',
                                  padding: '5px',
                              }}
                              ><span
                                style={{
                                  display: "block",
                                  padding: "20px",
                                  fontSize: '25px',
                                }}
                              >{step.label}</span>
                               <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto', padding: '5px'}} />
                                {step.descriptions}
                              
                              </Box>
                          ) : null}
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>

                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={10000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                              <Box
                              component="img"
                              sx={{
                                  height: 300,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                              }}
                              src={step.imgPath}
                              alt={step.label}
                              />
                          ) : null}
                         
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>
                  
                      <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{
                        background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                      }}
                      
                      nextButton={
                      <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                      >
                          Next
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                          ) : (
                          <KeyboardArrowRight />
                          )}
                      </Button>
                      }
                      backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                          ) : (
                          <KeyboardArrowLeft />
                          )}
                          Back
                      </Button>
                      }
                  />
              </Box>
             
            </div>
            <hr id="services" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <CssVarsProvider>
            <main>
              <Sheet
                style={{
                  width: "100%",
                  margin: 'auto', // margin left & right
                  marginTop: "40px",
                  marginBottom: "40px",
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
                <h1 style={{ fontWeight: "10px", fontSize: "35px", padding: '15px', WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>Services</h1>
                <hr style={{width: '65%', border: 'double', color: 'green', margin: "auto", marginBottom: '15px'}}/>
                <div>
                  <img src={logoOne} alt="website logo of lotus" style={{ width: '50%', margin: "auto",}} />
                </div>
                <hr style={{width: '65%', border: 'double', color: 'green', margin: "auto", marginTop: '15px', marginBottom: '15px'}}/>
                <Typography sx={{ fontWeight: "10px", fontSize: "30px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', color: 'black' }}>
                    <b>Modalities</b>
                </Typography>
                <Typography sx={{ fontSize: "20px", color: 'black' }}>
                    <b>Includes: </b>
                </Typography>
                <Typography sx={{ fontSize: "15px", color: 'black', fontStyle: 'italic' }}>
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
                <Typography sx={{ fontSize: "18px", color: 'black' }}>
                      <b> Swedish Massage</b>
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: 'black' }}>
                      <b> Deep Tissue Massage</b>
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: 'black' }}>
                      <b> Reflexology</b>
                  </Typography>
                  <Typography sx={{ fontSize: "18px", color: 'black' }}>
                      <b> Scalp Massage</b>
                  </Typography>
                </div>
                <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto', padding: '15px'}} />
                
              </Sheet>
            </main>
            </CssVarsProvider>
            <hr id="social-media" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <Footer/>
            </>
      ) : (
        <>
            <div style={{ display: 'block', justifyContent: "center", alignItems: "center", margin: 'auto',}}>
                <Sheet
                    sx={{
                    width: "20%",
                    mx: 'auto', // margin left & right
                    my: 3, // margin top & bottom
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
                    my: 5, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 3, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    borderRadius: 'sm',
                    background: "#c0c0c0", // Add this line
                    textAlign:'center',
                    backgroundColor: 'rgba(182, 182, 158, 0.671)',
                    border: 'double',
                    borderColor: 'rgba(10, 92, 51, 0.699)',
                    borderWidth: "5px", 
                    color: "black",
                }}
                >
                    <Typography style={{ fontWeight: "10px", fontSize: "45px", }}>Nghi Vo</Typography>
                    <Typography style={{ fontWeight: "10px", fontSize: "25px", }}>(Massage Therapist Student)</Typography>
                    
                    <Typography style={{ fontSize: '20px', fontFamily: 'monospace', padding:'20px', fontStyle: 'oblique'}}>
                    My journey into massage therapy has been both fascinating and fulfilling. 
                    As a student in this field, I'm passionate about using the power of touch to help people find relief from physical discomfort and stress. 
                    Learning the art of massage has given me a deep appreciation for the body's ability to heal itself and the importance of maintaining a mind-body connection. 
                    I look forward to using my skills to make a positive impact on the lives of others, one soothing massage at a time.
                    </Typography>
                    <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto'}} />
                </Sheet>
            </div>
            
            <hr id="type-of-massages" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <Sheet
                sx={{
                  width: 800,
                  mx: 'auto', // margin left & right
                  my: 2, // margin top & bottom
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
              > <h1 style={{ fontWeight: "10px", fontSize: "45px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>Type of Massages</h1></Sheet>
            <div
             style={{
              display: 'flex',
              width: "95%",
              margin: 'auto',
              mx: 'auto', // margin left & right
              my: 4, // margin top & bottom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              flexDirection: 'row',
              background: 'transparent',
             

            }}
            >
              <Typography style={{fontFamily: 'monospace', fontSize: '20px'}}></Typography>
              <Box sx={{ 
                  width: "45%", 
                  flexGrow: 1, 
                  margin: 'auto',
                  marginTop: "50px",
                  marginBottom: "50px",
                  marginRight: '50px',
                  border: 'double',
                  background: 'rgb(184, 184, 152)',
                  borderColor: 'rgba(10, 92, 51, 0.699)',
                  borderWidth: "5px",
                  }}>

                    <Paper
                        square
                        elevation={0}
                        style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        margin: 'auto',
                        background: "linear-gradient(to bottom, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                        justifyContent: 'center',
                        padding: '20px'
                        }}
                      >
                      <Typography style={{fontFamily: 'monospace', fontSize: '20px',}}></Typography>
                      </Paper>
                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={10000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                              <Box
                              component="img"
                              sx={{
                                  height: 450,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                              }}
                              src={step.imgPath}
                              alt={step.label}
                              />
                          ) : null}
                         
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>
                  <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{
                        background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                      }}
                      
                      nextButton={
                      <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                      >
                          Next
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                          ) : (
                          <KeyboardArrowRight />
                          )}
                      </Button>
                      }
                      backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                          ) : (
                          <KeyboardArrowLeft />
                          )}
                          Back
                      </Button>
                      }
                  />
              </Box>

              <Box sx={{ 
                  width: "45%", 
                  flexGrow: 1, 
                  margin: 'auto',
                  marginTop: "50px",
                  marginBottom: "50px",
                  border: 'double',
                  backgroundColor: 'rgba(182, 182, 158, 0.671)',
                  borderColor: 'rgba(10, 92, 51, 0.699)',
                  borderWidth: "5px",
                  }}>
                  <Paper
                      square
                      elevation={0}
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      margin: 'auto',
                      background: "linear-gradient(to bottom, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                      justifyContent: 'center',
                      padding: '20px'
                      }}
                  >
                      <Typography style={{fontFamily: 'monospace', fontSize: '20px',}}>{images.label}</Typography>
                  </Paper>
                  
                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={10000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            
                              <Box
                              sx={{
                                  height: 450,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                                  textAlign: "center",
                                  fontFamily: 'monospace',
                                  fontSize: '15px',
                                  padding: '5px',
                              }}
                              ><span
                                style={{
                                  display: "block",
                                  padding: "20px",
                                  fontSize: '30px',
                                }}
                              >{step.label}</span>
                               <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto', padding: '5px'}} />
                                {step.descriptions}
                              
                              </Box>
                          ) : null}
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>
                  
                  <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{
                          background: "linear-gradient(to top, green, rgba(190, 190, 161, 0.616), rgba(182, 182, 158, 0.671))",
                          justifyContent: 'center',
                          padding: '20px'
                           // Add this line
                      }}
                      
                  />
              </Box>
            </div>
            <hr id="services" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <CssVarsProvider>
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
                  textAlign: 'center',
                  backgroundColor: 'rgba(182, 182, 158, 0.671)',
                  border: 'double',
                  borderColor: 'rgba(10, 92, 51, 0.699)',
                  borderWidth: "5px"
                }}
                variant="outlined"
              >
                <h1 style={{ fontWeight: "10px", fontSize: "45px", WebkitTextStroke: '.75px #1fc600', WebkitTextFillColor: 'black', }}>Services</h1>
                <hr style={{width: '65%', border: 'double', color: 'green', margin: "auto", marginBottom: '15px'}}/>
                <div>
                  <img src={logoOne} alt="website logo of lotus" style={{ width: '50%', margin: "auto",}} />
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
                <img src={dividerImg} alt='golden line with diamond shape in the middle' style={{width: '100%', height: 'auto', padding: '15px'}} />
                
              </Sheet>
            </main>
            </CssVarsProvider>
            <hr id="social-media" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <Footer/>
            </>
            )};
        </div>
    );
}

export default Home;