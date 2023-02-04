import React from 'react'
import { Container } from '@mui/material';
import './styles/tempComp.css'

// AchievementTemp component to display a single achievement
const AchievementTemp = (props) => {
  // render a Container component with an li element inside
  return (
    <Container>
      <li className="achievement">{props.achievement}</li>
    </Container>
  );
};

export default AchievementTemp