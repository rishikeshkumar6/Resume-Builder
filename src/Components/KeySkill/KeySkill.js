import React, { useState } from 'react'
import { addNewSkills, deleteSkill, editSkill } from "../../Redux/actions/actions"
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from '@mui/material';
import Input from '../Input/Input';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN';

// Map state to props
const mapStateToProps = (state) => ({
  skills: state.keySkillsReducer.skills,
});

// Map dispatch actions to props
const mapDispatchToProps = (dispatch) => ({
  onAddNewSkill: () => dispatch(addNewSkills()),
  onEditSkill: (skills) => dispatch(editSkill(skills)),
  onDeleteSkill: (index) => dispatch(deleteSkill(index)),
});

// KeySkill component
const KeySkill = (props) => {
  // State for loading 
  const [loading, setLoading] = useState(false);
  
  // useForm hook for form handling
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle go back button click
  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  // Handle next button click
  const handleNext = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  }

  // Handle skill edit
  const onEditSkill = (value, id) => {
    const newSkills = props.skills.map((skill, index) => {
      if (index === id) {
        return value;
      } else return skill;
    });
    props.onEditSkill(newSkills);
  };

  return (
    <div>
      <Paper className='Paper' elevation={4}>
        <h2 className='heading-main'>Key Skills</h2>
        <Divider />
        <form onSubmit={handleSubmit(handleNext)}>
          <div className="grido">
            {props.skills.map((skill, index) => {
              return (
                <div className='gridoTwo' key={index}>
                  <Input
                    type={"text"}
                    name={`skill${index + 1}`}
                    register={register}
                    value={skill}
                    setValue={(skill) => onEditSkill(skill, index)}
                    error={errors[`skill${index + 1}`] ? true : false}
                    errorMessage={
                      errors[`skill${index + 1}`]
                        ? errors[`skill${index + 1}`].message
                        : null
                    }
                  />
                  {props.skills.length === 1 ? null : (
                    <DeleteOutlineIcon
                      className='deleteicon'
                      sx={{ marginLeft: "10px" }}
                      onClick={() => props.onDeleteSkill(index)}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className="addnewbtn">
            {props.skills.length >= 6 ? null : (
              <Button
                sx={{
                  marginTop :'15px'
                }}
                variant="text"
                onClick={props.onAddNewSkill}>
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

export default connect(mapStateToProps, mapDispatchToProps)(KeySkill);