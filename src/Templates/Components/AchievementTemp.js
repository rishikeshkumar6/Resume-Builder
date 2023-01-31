import { Container } from '@mui/material';
import React from 'react'
import './styles/tempComp.css'


const AchievementTemp = (props) => {
    return (
      <Container>
        <li className="achievement">{props.achievement}</li>
      </Container>
    );
  };

export default AchievementTemp
