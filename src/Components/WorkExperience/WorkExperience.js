import { Divider, Paper, Select, MenuItem, Button, OutlinedInput, } from '@mui/material'
import React from 'react'
import Input from '../Input/Input'
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN'
import SelectYear from '../Selectyear/SelectYear'
import './WorkExperience.css'
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { addAllExperience, addExperience } from "../../Redux/actions/actions"
import { useState } from 'react'

// mapping state from the store to component's props
const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

// mapping dispatch actions to component's props
const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

// array of years for the select component
const years = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
];

const WorkExperience = (props) => {
  const [loading, setLoading] = useState(false);

  // hook for form management with react-hook-form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // handles back button click
  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  // handles next button click
  const handleNext = (data) => {
    setLoading(true);

    // dividing data into two objects to store experience of two jobs
    let experienceOne = {};
    let experienceTwo = {};

    // looping through the data to divide into two experiences
    for (let index in data) {
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else {
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
    }

    // storing the experience into the store based on the length of experienceTwo
    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
      ]);
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    // waiting for a second to show the loading and then incrementing the step
    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  };

  // action to add new experience to the store
  const addNewExperience = () => {
    props.setExperience({
      id: props.experiences.length + 1,
      jobTitle: "",
      organizationName: "",
      startYear: "",
      endYear: "",
    });
  };

  const editJobTitleExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, jobTitle: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  const editOrganisationNameExperience = (value, id) => {
    const newExperiences = props.experiences.map((experience) => {
      if (experience.id === id) {
        return { ...experience, organizationName: value };
      } else return experience;
    });

    props.setAllExperience(newExperiences);
  };

  return (
    <Paper className='Paper' elevation={4}>
      <h2 className='heading-main'>Work Experience</h2>
      <Divider />
      <form onSubmit={handleSubmit(handleNext)}>
        {props.experiences.map((experience) => {
          return (
            <div key={experience.id} className="experience-cont">
              <h3 className="exp-heading">Experience {experience.id}</h3>
              <div className='grido'>
                <Input
                  label={"Job Title"}
                  type={"text"}
                  register={register}
                  name={"jobTitle" + experience.id}
                  value={experience.jobTitle}
                  setValue={(value) =>
                    editJobTitleExperience(value, experience.id)
                  }
                  error={Boolean(errors[`jobTitle${experience.id}`])}
                  errorMessage={
                    errors[`jobTitle${experience.id}`]
                      ? errors[`jobTitle${experience.id}`].message
                      : null
                  }
                />
                <Input
                  label={"Organisation Name"}
                  type={"text"}
                  register={register}
                  name={"organizationName" + experience.id}
                  value={experience.organizationName}
                  setValue={(value) =>
                    editOrganisationNameExperience(value, experience.id)
                  }
                  error={
                    errors[`organizationName${experience.id}`] ? true : false
                  }
                  errorMessage={
                    errors[`organizationName${experience.id}`]
                      ? errors[`organizationName${experience.id}`].message
                      : null
                  }
                />
                <SelectYear
                  label={"Start Year"}
                  errorMessage={
                    errors[`startYear${experience.id}`]
                      ? errors[`startYear${experience.id}`].message
                      : null
                  }
                  error={errors[`startYear${experience.id}`] ? true : false}
                >
                  <Controller
                    render={(props) => {
                      return (
                        <Select
                          input={<OutlinedInput label="Start Year" />}
                          value={props.field.value}
                          onChange={props.field.onChange}
                          error={
                            errors
                              ? errors[`startYear${experience.id}`]
                                ? true
                                : false
                              : false
                          }>
                          {years.map((year, index) => {
                            return (
                              <MenuItem key={index} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      );
                    }}
                    name={`startYear${experience.id}`}
                    control={control}
                    rules={{ required: "*Please select start year" }}
                    defaultValue={experience.startYear}
                  />
                </SelectYear>
                <SelectYear
                  label={"End Year"}
                  errorMessage={
                    errors[`endYear${experience.id}`]
                      ? errors[`endYear${experience.id}`].message
                      : null
                  }
                  error={errors[`endYear${experience.id}`] ? true : false}>
                  <Controller
                    render={(props) => (
                      <Select
                        input={<OutlinedInput label="End Year" />}
                        value={props.field.value}
                        onChange={props.field.onChange}
                        error={
                          errors
                            ? errors[`endYear${experience.id}`]
                              ? true
                              : false
                            : false
                        }>
                        {years.map((year, index) => {
                          return (
                            <MenuItem key={index} value={year}>
                              {year}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    )}
                    name={"endYear" + experience.id}
                    control={control}
                    rules={{ required: "*Please select end year" }}
                    defaultValue={experience.endYear}
                  />
                </SelectYear>
              </div>
            </div>
          );
        })}
        {props.experiences.length === 2 ? null : (
          <div className="addnewbtn">
            <Button sx={{ margin: "15px 0 0 0" }} onClick={addNewExperience} variant="text">
              Add New
            </Button>

          </div>
        )}
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
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkExperience);