import { Container } from '@mui/material';
import React from 'react'
import './styles/Experiencetemp.css'


const ExperienceTemp = (props) => {
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
