
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

// Styled component for item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Map state to props
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
});

// Map dispatch to props
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

// Component for MyResume
const MyResume = (props) => {
  const [resumes, setResumes] = useState([]);

  // Use effect hook to retrieve resumes from local storage
  useEffect(() => {
    const newResumes = window.localStorage.getItem("resumes")
      ? JSON.parse(window.localStorage.getItem("resumes"))
      : [];

    // Update the resumes state
    setResumes(newResumes);
  }, []);

  const navigate = useNavigate();

  // Function to retrieve template based on resume
  const getTemplate = (resume, index) => {
    let template = templates.find(
      (eachTemplate) => eachTemplate.id === resume.template_id
    );
     // Clone and return template component with necessary props
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
    // Get the current resumes from local storage
    let resumes = window.localStorage.getItem("resumes");
    
    // Parse the JSON string to an array of resumes
    let newResumes = JSON.parse(resumes);
    
    // Filter the resume with the same id as the resume being deleted
    const newSetOfResumes = newResumes.filter((eachResume) => {
    return eachResume.id !== resume.id;
    });
    
    // Update the local storage with the updated list of resumes
    window.localStorage.setItem("resumes", JSON.stringify(newSetOfResumes));
    
    // Update the component state with the updated list of resumes
    setResumes(newSetOfResumes);
    };

  const downloadResume = (id) => {
    if ( window.confirm("Click here to download") === true){
    // Create a new instance of JsPDF with portrait orientation, point unit, and A4 size
    const report = new JsPDF("portrait", "pt", "a4");
    // Add the HTML content of the resume with the specified id to the PDF document
    report.html(document.getElementById(`${id}report`)).then(() => {
      report.save(`resume.pdf`);
    });
  }
};

  const setUserData = (resume) => {
    // Add the personal information of the resume to the state
    props.onAddPersonalInfo(resume.personalInfo);    
    // Set all experiences of the resume to the state
    props.setAllExperience(resume.experiences);    
    // Add the education information of the resume to the state
    props.onAddEducation(resume.educationInfo);    
    // Add the skills of the resume to the state
    props.onEditSkill(resume.skills);    
    // Add the achievements of the resume to the state
    props.onEditAchievement(resume.achievements);    
    // Add the projects of the resume to the state
    props.onEditProject(resume.projects);
    };    
    const navigateToFillDetails = (resume) => {
    // Set the selected template id in the state
    props.setSelectedTemplateId(resume.template_id);    
    // Set the selected resume id in the state
    props.setSelectedResumeId(resume.id);
    // Set the user data for the resume to the state
    setUserData(resume);
    // Navigate to the fill details page
    navigate("/template/fill-details");
    };

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