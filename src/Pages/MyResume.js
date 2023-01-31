import React, { useEffect, useState } from 'react'
import './styles/MyResume.css'
import {addAllExperience,addEducation,addPersonalInfo,editSkill,editAchievement,editProject, selectResume,selectTemplate,
} from "../Redux/actions/actions"
import JsPDF from "jspdf";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Paper } from '@mui/material';
import BlackScreen from '../Components/BlackScreen/BlackScreen';
import { templates } from "../templates";
import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedTemplateId: (id) => dispatch(selectTemplate(id)),
  setSelectedResumeId: (id) => dispatch(selectResume(id)),
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
  onAddEducation: (details) => dispatch(addEducation(details)),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onEditAchievement: (achievements) => dispatch(editAchievement(achievements)),
  onEditProject: (projects) => dispatch(editProject(projects)),
});

const MyResume = (props) => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    setResumes(newResumes);
  }, []);

  const navigate = useNavigate();

  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
    // console.log("resume",resume)
    // console.log("template", template);

    const TemplateComp = React.cloneElement(template.template, {
      personalinfo: resume.personalInfo,
      workexperience: resume.experiences,
      educationinfo: resume.educationInfo,
      skills: resume.skills,
      achievements: resume.achievements,
      projects: resume.projects,
      key: resume.id,
      index: index,
    });

    return TemplateComp;
  };

  const deleteResume = (resume) => {
    let resumes = window.localStorage.getItem("resumes");

    let newResumes = JSON.parse(resumes);
    const newSetOfResumes = newResumes.filter((eachResume) => {
      return eachResume.id !== resume.id;
    });

    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    setResumes(newSetOfResumes);
  };

  const downloadResume = (id) => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
    });
  };

  const setUserData = (resume) => {
    props.onAddPersonalInfo(resume.personalInfo);
    props.setAllExperience(resume.experiences);
    props.onAddEducation(resume.educationInfo);
    props.onEditSkill(resume.skills);
    props.onEditAchievement(resume.achievements);
    props.onEditProject(resume.projects);
  };

  const navigateToFillDetails = (resume) => {
    props.setSelectedTemplateId(resume.template_id);
    props.setSelectedResumeId(resume.id);
    setUserData(resume);
    navigate("/template/fill-details");
  };

  // console.log(resumes);
  return (
    <>
      <div className="myresumecontainer">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center">
            {resumes.length >= 1 ? (
              resumes.map((resume, index) => {
                return (
                  <Grid
                    item
                    className={`resume`}
                    id={`${index}resume`}
                    margin={2}
                    key={index}>
                    <Item id={`${index}ITEM`}>
                      {getTemplate(resume, index)}
                      <BlackScreen />
                      <div className="myresumebtncontainer">
                        <Button
                          className="myresumebtn"
                          onClick={() => {
                            downloadResume(index);
                          }}
                          size="medium"
                          variant="contained">
                          Download
                        </Button>
                        <Button
                          className="myresumebtn"
                          onClick={() => {
                            deleteResume(resume);
                          }}
                          size="medium"
                          variant="contained">
                          Delete
                        </Button>
                        <Button
                          className="myresumebtn"
                          onClick={() => navigateToFillDetails(resume)}
                          size="medium"
                          variant="contained">
                          Edit Template
                        </Button>
                      </div>
                    </Item>
                  </Grid>
                );
              })
            ) : (
              <div className="myresumeempty">
                <SentimentDissatisfiedRoundedIcon  sx={{ fontSize: "250px", }} />
                <p className="emptymyresumetext" style={{fontSize: "50px", marginTop:"50px"}}
                >
                To view a resume, kindly create one.
                </p>
              </div>
            )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyResume);