import React, { useState } from 'react'
import { addNewAchievements, deleteAchievement, editAchievement } from "../../Redux/actions/actions"
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Paper, Divider, Button } from '@mui/material';
import Input from '../Input/Input';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN';

// map the state to props for the component
const mapStateToProps = (state) => ({
  achievements: state.keyAchievementsReducer.achievements,  
});

// map the dispatch actions to props
const mapDispatchToProps = (dispatch) => ({
  onaddNewAchievement: () => dispatch(addNewAchievements()),
  onEditAchievement: (achievements) => dispatch(editAchievement(achievements)),
  onDeleteAchievement: (index) => dispatch(deleteAchievement(index)),
});


const Achievements = (props) => {
  // State to manage the loading state
  const [loading, setLoading] = useState(false);

  // useForm hook to manage the form state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function to handle the back button click
  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  // function to handle the next button click
  const handleNext = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  }

  // function to handle the achievement edit
  const onEditAchievement = (value, id) => {
    const newAchievements = props.achievements.map((achievement, index) => {
      if (index === id) {
        return value;
      } else return achievement;
    });

    props.onEditAchievement(newAchievements);
  };

   // Render the achievements form with all the fields and buttons
  return (
    <div>
      <Paper className='Paper' elevation={4}>
        <h2 className='heading-main'>Achievements</h2>
        <Divider />
        <form onSubmit={handleSubmit(handleNext)}>
          <div className="grido">
            {/* Map over the achievements to render each achievement field */}
            {props.achievements.map((achievement, index) => {
              return (
                <div className='gridoTwo' key={index}>
                   {/* Input component for each achievement */}
                  <Input
                    type={"text"}
                    name={`achievement${index + 1}`}
                    register={register}
                    value={achievement}
                    setValue={(achievement) => onEditAchievement(achievement, index)}
                    error={errors[`achievement${index + 1}`] ? true : false}
                    errorMessage={
                      errors[`achievement${index + 1}`]
                        ? errors[`achievement${index + 1}`].message
                        : null
                    }
                  />
                  {props.achievements.length === 1 ? null : (
                    <DeleteOutlineIcon
                      className='deleteicon'
                      sx={{ marginLeft: "10px" }}
                      onClick={() => props.onDeleteAchievement(index)}
                    />
                  )}
                </div>
              )
            })}
          </div>
          <div className="addnewbtn">
            {props.achievements.length >= 6 ? null : (
              <Button
                sx={{
                  marginTop :'15px'
                }}
                variant="text"
                onClick={props.onaddNewAchievement}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);