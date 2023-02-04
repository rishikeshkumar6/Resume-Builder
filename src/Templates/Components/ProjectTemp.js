import React from 'react'
import { Container } from '@mui/material';  // Import the Container component from @mui/material library
import './styles/tempComp.css'  // Import the stylesheet for this component

// Function component that takes in a prop 'props'
const ProjectTemp = (props) => {
  // Render a Container component with a list item and class "project"
  return (
    <Container>
      <li className="project">{props.project}</li>
    </Container>
  );
};

export default ProjectTemp