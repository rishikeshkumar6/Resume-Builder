import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import EducationTemp from './Components/EducationTemp';
import ExperienceTemp from './Components/ExperienceTemp';
import Header from './Components/Header';
import Heading from './Components/Heading';
import SkillTemp from './Components/SkillTemp';
import { defaultInputs } from './Components/defaultInputs';
import AchievementTemp from './Components/AchievementTemp';
import ProjectTemp from './Components/ProjectTemp';
import './styles/Template3.css'

const Template3 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : defaultInputs.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : defaultInputs.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : defaultInputs.education_details;
  const skills = props.skills ? props.skills : defaultInputs.key_skills;
  const achievements = props.achievements ? props.achievements : defaultInputs.achievements;
  const projects = props.projects ? props.projects : defaultInputs.projects;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={4}>
      <Header
        primaryColor={"#800080"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
    />          
      <Container>
        <Heading color={"#800080"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <ExperienceTemp
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <Heading color={"#800080"} title={"Education"} />
        <EducationTemp education={educationinfo} />
        <div>
          <div>
            <Heading color={"#800080"} title={"Key Skills"} />
            <ul style={{ marginBottom: 10 }}>
              {skills.map((skill, index) => {
                return <SkillTemp key={index} skill={skill} />;
              })}
            </ul>
          </div>
          <div>
            <Heading color={"#800080"} title={"Achievements"} />
            <ul style={{ marginBottom: 10 }}>
              {achievements.map((achievement, index) => {
                return <AchievementTemp key={index} achievement={achievement} />;
              })}
            </ul>
          </div>
          <div>
            <Heading color={"#800080"} title={"Projects"} />
            <ul style={{ marginBottom: 10 }}>
              {projects.map((project, index) => {
                return <ProjectTemp key={index} project={project} />;
              })}
            </ul>
          </div>
        </div>
      </Container>
    </Paper>
  );
};

export default Template3;