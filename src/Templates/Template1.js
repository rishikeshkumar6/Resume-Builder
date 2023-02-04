import { Paper, Container } from '@mui/material';
import React from 'react'
import EducationTemp from './Components/EducationTemp';
import ExperienceTemp from './Components/ExperienceTemp';
import Header from './Components/Header';
import Heading from './Components/Heading';
import SkillTemp from './Components/SkillTemp';
import { defaultInputs } from './Components/defaultInputs';
import AchievementTemp from './Components/AchievementTemp';
import ProjectTemp from './Components/ProjectTemp';
import "./styles/Template.css"

const renderExperiences = experiences => experiences.map((experience, index) => (
  <ExperienceTemp key={index} experience={experience} />
));

const renderSkills = skills => skills.map((skill, index) => (
  <SkillTemp key={index} skill={skill} />
));

const renderAchievements = achievements => achievements.map((achievement, index) => (
  <AchievementTemp key={index} achievement={achievement} />
));

const renderProjects = projects => projects.map((project, index) => (
  <ProjectTemp key={index} project={project} />
));

// Template1 component is a functional component
const Template1 = (props) => {
  // Destructure the input props and use default values if they are not provided
  const { personalinfo = defaultInputs.personal_info, 
    workexperience = defaultInputs.work_experience, 
    educationinfo = defaultInputs.education_details, 
    skills = defaultInputs.key_skills, 
    achievements = defaultInputs.achievements, 
    projects = defaultInputs.projects } = props;
// Return the HTML content with the Paper component as the main container
  return (
    <Paper
      sx={{
        width: "595px",
        height: "841px"
      }}
      id={`${props.index}report`}
      elevation={4}>
      {/* Render the header component */}
      <Header personalInfo={personalinfo} workExperience={workexperience} />
      <Container>
        <Heading color={"brown"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {renderExperiences(workexperience)}
        </ul>
        <Heading color={"brown"} title={"Education"} />
        <EducationTemp education={educationinfo} />
        <div className='temponegrid'>
          <div>
            <Heading color={"brown"} title={"Key Skills"} />
            <ul style={{ marginBottom: 10 }}>
              {renderSkills(skills)}
            </ul>
          </div>
          <div>
            <Heading color={"brown"} title={"Achievements"} />
            <ul style={{ marginBottom: 10 }}>
              {renderAchievements(achievements)}
            </ul>
          </div>
          <div>
            <Heading color={"brown"} title={"Projects"} />
            <ul style={{ marginBottom: 10 }}>
              {renderProjects(projects)}
            </ul>
          </div>
        </div>
      </Container>
    </Paper>
  );
};
export default Template1;