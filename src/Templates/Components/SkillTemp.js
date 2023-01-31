import { Container } from '@mui/material';
import React from 'react'
import './styles/tempComp.css'


const SkillTemp = (props) => {
    return (
      <Container>
        <li className="skill">{props.skill}</li>
      </Container>
    );
  };

export default SkillTemp
