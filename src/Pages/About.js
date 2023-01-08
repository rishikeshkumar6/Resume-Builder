import { Stack, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import "./styles/About.css"



const About = () => {
  return (
    <div>
      <Navbar />
      <Stack>
        <h2 className='header-title'>
            Resume Builder
        </h2>
        <Stack className='container' direction='row' >
            <Typography fontSize='20px'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo, in eligendi quam illo aperiam omnis ullam minima harum perspiciatis vero beatae quis ad ut. Fuga dicta, accusantium, voluptatum nulla doloribus atque fugit necessitatibus neque amet aliquid quibusdam exercitationem tempora dolore ut itaque iure sed ab corporis. Perspiciatis expedita voluptates, magni accusamus suscipit provident, debitis dignissimos facilis excepturi consequatur iusto sunt tenetur. Consequatur nostrum corrupti quas consectetur harum, veritatis ut nesciunt, quo error velit ipsa voluptatibus. Quam, distinctio nulla, perspiciatis quibusdam voluptatum eum temporibus porro ab officiis praesentium blanditiis enim laboriosam consequatur eos! Laborum molestiae reprehenderit nulla laboriosam. Temporibus, placeat. Dolores, placeat reiciendis voluptatibus officiis, cupiditate aliquid
            </Typography>
            <Stack>
                <img src="https://media.istockphoto.com/id/1156383064/vector/flat-cartoon-character.jpg?s=612x612&w=0&k=20&c=hpIyuQDavhuzCZ-9CCrMyx5mwnz5aHGouvzrgSaDfPA=" alt='resume-bulider-img'/>
            </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default About
