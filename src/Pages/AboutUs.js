import { WhatsApp, Facebook, LinkedIn, Instagram, Twitter, Reddit, Email } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "./styles/About.css"



const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Stack padding={
        {lg:'50px', md:'35px', sm:'25px', sx:'15px'}
      }>
        <h2 className='header-title'>
          Resume Builder
        </h2>
        <Stack className='container' direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }} >
          <Typography className='Typography' sx={{
              fontSize: {
                xs: "15px",
                sm: "17px",
                md: "19px",
                lg: "20px",
              },
              paddingRight: {
                xs: "15px",
                sm: "20px",
                lg: "25px",
              },
            }}>
          
          Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
          We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.
          </Typography>
          <Stack  className='img' marginBottom={{
                xs: "20px",
                sm: "20px",
                md: "20px",}}>
            <img src="https://media.istockphoto.com/id/849410148/vector/human-resources-management-concept.jpg?s=612x612&w=0&k=20&c=YCuOlwFaN2jwhCUmu3px_4AdPctg_EH8ud-9iGYwr2M=" alt='resume-bulider-img' />
          </Stack>
        </Stack>
        <Stack>
          <Typography className='Share' sx={{fontSize:{ lg:"30px",
          md:"28px",
          sm:'27px',
          sx: '25px'}, fontWeight: '700', marginLeft:3}}>
            Please share your with friends
          </Typography>
        </Stack>
        <Box  className='icons'>
          <WhatsApp className='WhatsApp' sx={{ fontSize: "40px", margin:1}}></WhatsApp>
          <Facebook className='Facebook' sx={{ fontSize: "40px", margin:1 }}></Facebook>
          <LinkedIn className='LinkedIn' sx={{ fontSize: "40px", margin:1 }}></LinkedIn>
          <Instagram className='Instagram' sx={{ fontSize: "40px", margin:1 }}></Instagram>
          <Email className='Email' sx={{ fontSize: "40px", margin:1 }}></Email>
          <Twitter className='Twitter' sx={{ fontSize: "40px", margin:1 }}></Twitter>
          <Reddit className='Reddit' sx={{ fontSize: "40px", margin:1 }}></Reddit>
        </Box>
      </Stack>
    </div>
  )
}

export default AboutUs
