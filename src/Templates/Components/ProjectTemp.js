import { Container } from '@mui/material';
import React from 'react'
import './styles/tempComp.css'


const ProjectTemp = (props) => {
    return (
      <Container>
        <li className="project">{props.project}</li>
      </Container>
    );
  };

export default ProjectTemp
