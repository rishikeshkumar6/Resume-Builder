import React from 'react'
import { Container } from '@mui/material';
import './styles/Experiencetemp.css'

// ExperienceTemp component to display work experience
const ExperienceTemp = (props) => {
  // render a Container component with an li element inside
  return (
    <Container>
      <li>
        <h3 className="experienceheading">
          {props.experience.jobTitle}{" "}
          <span className="orgnameexperience">
            {props.experience.organizationName}
          </span>
          <span className="startendyear">
            ({props.experience.startYear} - {props.experience.endYear})
          </span>
        </h3>
      </li>
    </Container>
  );
};

export default ExperienceTemp