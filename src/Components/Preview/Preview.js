import React, { useState } from 'react'
import './Preview.css'
import { connect } from 'react-redux';
import JsPDF from "jspdf";
import uniqid from "uniqid";
import { Button, CircularProgress, Container, TextField } from '@mui/material';
import { templates } from "../../templates";
import Download from '../Download/Download';


// Maps the state from the store to the props of the component
const mapStateToProps = (state) => ({
  selectedTemplateId: state.selectedTemplateReducer.selectedTemplateId,
  selectedResumeId: state.selectedTemplateReducer.selectedResumeId,
  personalInfo: state.personalInfoReducer.personalInfo,
  experiences: state.workExperienceReducer.experiences,
  educationInfo: state.educationDetailsReducer.educationInfo,
  skills: state.keySkillsReducer.skills,
  achievements: state.keyAchievementsReducer.achievements,
  projects: state.keyProjectsReducer.projects,
});

// Maps dispatch actions to the props of the component
const mapDispatchToProps = (dispatch) => ({});

// The Preview component
const Preview = (props) => {
  // State variables to keep track of loading status and name of the resume
  const [loading, setLoading] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [error, setError] = useState("");
  const [download, setDownload] = useState(false);

  // A helper function to get the template component based on the selected template id
  const getTemplate = (template, index) => {
    if (template.id === props.selectedTemplateId) {
      // Clones the selected template component and passes the required props
      const TemplateComp = React.cloneElement(template.template, {
        personalinfo: props.personalInfo,
        workexperience: props.experiences,
        educationinfo: props.educationInfo,
        skills: props.skills,
        index: index,
        achievements: props.achievements,
        projects: props.projects,
      });
      return TemplateComp;
    }
  };

  const openDownload = async () => {
    setDownload(true)


    setTimeout(() => {
      setDownload(false)
    }, 2000);
}

const bgBlur = () => {
  const blur = document.getElementById("main");
  blur.classList.toggle('active');
}

  // Handles the saving of the resume
  const handleSave = () => {
    if (resumeName.length === 0) {
      setError("*Please fill this field");
    } else {
      setError("");
      setLoading(true);
      const report = new JsPDF("portrait", "pt", "a4");
      report
        .html(document.getElementById(`${props.selectedTemplateId - 1}report`))
        .then(() => {
          report.save(`${resumeName}.pdf`);
          setLoading(false);
          let resumes = window.localStorage.getItem("resumes");
          if (resumes) {
            let newResumes = JSON.parse(resumes);

            let resumeFound = newResumes.find(
              (resume) => resume.id === props.selectedResumeId
            );

            if (resumeFound) {
              const allNewResumes = newResumes.map((resume) => {
                if (resume.id === props.selectedResumeId) {
                  return {
                    template_id: props.selectedTemplateId,
                    id: props.selectedResumeId,
                    personalInfo: props.personalInfo,
                    experiences: props.experiences,
                    educationInfo: props.educationInfo,
                    achievements: props.achievements,
                    projects: props.projects,
                  };
                } else return resume;
              });
              window.localStorage.setItem(
                "resumes",
                JSON.stringify(allNewResumes)
              );
              window.location.reload();
              return;
            }
            newResumes.push({
              template_id: props.selectedTemplateId,
              id: uniqid(),
              personalInfo: props.personalInfo,
              experiences: props.experiences,
              educationInfo: props.educationInfo,
              skills: props.skills,
              achievements: props.achievements,
              projects: props.projects,
            });

            window.localStorage.setItem("resumes", JSON.stringify(newResumes));
          } else {
            window.localStorage.setItem(
              "resumes",
              JSON.stringify([
                {
                  template_id: props.selectedTemplateId,
                  id: uniqid(),
                  personalInfo: props.personalInfo,
                  experiences: props.experiences,
                  educationInfo: props.educationInfo,
                  skills: props.skills,
                  achievements: props.achievements,
                  projects: props.projects,
                },
              ])
            );
          }
          // window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }

};

  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  return (
    <>
    <Container
      sx={{
        padding: {
          xs: "40px 20px",
          md: "60px 80px",
        },
      }}
      >
      <h2 className="heading-main" style={{padding:"30px"}}>Resume Preview</h2>
      <div className="previewcontainer">
        <div  className="griditempreview" id="previewresume" >
          {templates.map((template, index) => {
            return getTemplate(template, index);
          })}
        </div>
        <div className="griditempreview">
          <div className="resumesave">
            <h3 className="resumetitlesave">Create File Name</h3>
            <TextField
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              className="nameresume"
              sx={{ width: "70%" }}
              id="outlined-basic"
              variant="outlined"
              error={error.length > 0 ? true : false}
              helperText={error}
            />
            <div className="containerbtn">
              <Button
                onClick={handleBack}
                className="btncreate"
                sx={{ marginRight: "20px" }}
                variant="outlined">
                Back
              </Button>
              {loading ? (
                <CircularProgress size={25} />
              ) : (
                <Button
                  onClick={() => { (handleSave()); (openDownload());  bgBlur(); }}
                  className="btncreate"
                  variant="contained">
                  Save
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
      {download === true ? <Download /> : null}
    </>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Preview);