import { Container } from '@mui/material';
import React from 'react'
import './styles/tempComp.css'

// This component displays a skill
const SkillTemp = (props) => {
    return (
      // This is the container for the skill
      <Container>
        <li className="skill">{props.skill}</li>
      </Container>
    );
  };

// Export the component
export default SkillTemp