import React, { useState } from 'react'
import { addNewProjects, deleteProject, editProject } from "../../Redux/actions/actions"
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from '@mui/material';
import Input from '../Input/Input';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN';

const mapStateToProps = (state) => ({
  projects: state.keyProjectsReducer.projects,  
});

const mapDispatchToProps = (dispatch) => ({
  onaddNewProjects: () => dispatch(addNewProjects()),
  onEditProject: (projects) => dispatch(editProject(projects)),
  onDeleteProject: (index) => dispatch(deleteProject(index)),
});


const Projects = (props) => {
  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  const handleNext = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  }

  const onEditProject = (value, id) => {
    const newProjects = props.projects.map((project, index) => {
      if (index === id) {
        return value;
      } else return project;
    });

    props.onEditProject(newProjects);
  };

  return (
    <div>
      <Paper className='Paper' elevation={4}>
        <h2 className='heading-main'>Projects</h2>
        <Divider />
        <form onSubmit={handleSubmit(handleNext)}>
          <div className="grido">
            {props.projects.map((project, index) => {
              return (
                <div className='gridoTwo' key={index}>
                  <Input
                    type={"text"}
                    name={`project${index + 1}`}
                    register={register}
                    value={project}
                    setValue={(project) => onEditProject(project, index)}
                    error={errors[`project${index + 1}`] ? true : false}
                    errorMessage={
                      errors[`project${index + 1}`]
                        ? errors[`project${index + 1}`].message
                        : null
                    }
                  />
                  {props.projects.length === 1 ? null : (
                    <DeleteOutlineIcon
                      className='deleteicon'
                      sx={{ marginLeft: "10px" }}
                      onClick={() => props.onDeleteProject(index)}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className="addnewbtn">
            {props.projects.length >= 6 ? null : (
              <Button
                sx={{
                  marginTop :'15px'
                }}
                variant="text"
                onClick={props.onaddNewProjects}>
                Add new
              </Button>
            )}
          </div>
          <Divider sx={{ margin: "15px 0" }} />
          <NextnBackBTN
            onNext={handleNext}
            goBack={handleBack}
            loading={loading}
            click={props.click}
            nextbtn={"Next"}
            backbtn={"Back"}
          />
        </form>
      </Paper>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);