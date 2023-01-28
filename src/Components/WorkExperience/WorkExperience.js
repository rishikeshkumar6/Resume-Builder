import { Divider, Paper, Select, MenuItem, Button, OutlinedInput} from '@mui/material'
import React from 'react'
import Input from '../Input/Input'
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN'
import SelectYear from '../SelectYear/SelectYear'
import './WorkExperience.css'
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { addAllExperience, addExperience } from "../../Redux/actions/actions"
import { useState } from 'react'

const mapStateToProps = (state) => ({
  experiences: state.workExperienceReducer.experiences,
});

const mapDispatchToProps = (dispatch) => ({
  setExperience: (experience) => dispatch(addExperience(experience)),
  setAllExperience: (experiences) => dispatch(addAllExperience(experiences)),
});

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

  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  const handleNext = (data) => {
    setLoading(true);

    let experienceOne = {};
    let experienceTwo = {};

    for (let index in data) {
      if (index.includes("1")) {
        experienceOne[index.slice(0, index.length - 1)] = data[index];
      } else {
        experienceTwo[index.slice(0, index.length - 1)] = data[index];
      }
    }


    if (Object.keys(experienceTwo).length) {
      props.setAllExperience([
        { ...experienceOne, id: 1 },
        { ...experienceTwo, id: 2 },
      ]);
    } else {
      props.setAllExperience([{ ...experienceOne, id: 1 }]);
    }

    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  };

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  
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
                  name={"organizationName" + experience.id}
                  value={experience.organizationName}
                  setValue={(value) =>
                    editOrganisationNameExperience(value, experience.id)
                  }
                  error={Boolean(errors[`jobTitle${experience.id}`])}
                  errorMessage={
                    errors[`jobTitle${experience.id}`]
                      ? errors[`jobTitle${experience.id}`].message
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

