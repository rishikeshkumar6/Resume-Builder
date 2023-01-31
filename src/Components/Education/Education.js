import React from 'react'
import { connect } from "react-redux";
import { addEducation } from '../../Redux/actions/actions'
import { Divider, MenuItem, OutlinedInput, Paper, Select } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import Input from '../Input/Input';
import SelectYear from '../Selectyear/SelectYear';
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN';


const mapStateToProps = (state) => ({
  educationInfo: state.educationDetailsReducer.educationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddEducation: (details) => dispatch(addEducation(details)),
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


const Education = (props) => {
  const [loading, setLoading] = useState(false);

  const handleNext = (data) => {
    setLoading(true);
    props.onAddEducation(data);
    setTimeout(() => {
      setLoading(false);
      props.setClick(props.click + 1);
    }, 1000);
  };


  const handleBack = () => {
    props.setClick(props.click - 1);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Paper className='Paper' elevation={4}>
        <h2 className='heading-main'>Education Details</h2>
        <Divider />
        <form onSubmit={handleSubmit(handleNext)}>
          <div className='grido'>
          <Input
              label={'Domain'}
              type={"text"}
              register={register}
              name={"domain"}
              value={props.educationInfo.domain}
            setValue={(value) =>
              props.onAddEducation({ ...props.educationInfo, domain: value })
            }
            error={errors.domain ? true : false}
            errorMessage={errors.domain ? errors.domain.message : null}
            />
            <div/>
            <Input
              label={'University'}
              type={"text"}
              register={register}
              name={"university"}
              value={props.educationInfo.university}
              setValue={(value) =>
                props.onAddEducation({
                  ...props.educationInfo,
                  university: value,
                })
              }
              error={errors.university ? true : false}
              errorMessage={errors.university ? errors.university.message : null}
            />
            <Input
              label={'Degree'}
              type={"text"}
              register={register}
              name={"degree"}
              value={props.educationInfo.degree}
              setValue={(value) =>
                props.onAddEducation({ ...props.educationInfo, degree: value })
              }
              error={errors.degree ? true : false}
              errorMessage={errors.degree ? errors.degree.message : null}
            />
            <SelectYear
              label={"Start Year"}
              errorMessage={errors.startYear ? errors.startYear.message : null}
              error={errors.startYear ? true : false}>
              <Controller
                render={(props) => {
                  return (
                    <Select
                      input={<OutlinedInput label="Start Year" />}
                      value={props.field.value}
                      onChange={props.field.onChange}
                      error={errors.startYear ? true : false}>
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
                name={"startYear"}
                control={control}
                rules={{ required: "*Please select start year" }}
                defaultValue={props.educationInfo.startYear}
              />
            </SelectYear>
            <SelectYear
              label={"End Year"}
              errorMessage={errors.endYear ? errors.endYear.message : null}
              error={errors.endYear ? true : false}>
              <Controller
                render={(props) => (
                  <Select
                    input={<OutlinedInput label="End Year" />}
                    value={props.field.value}
                    onChange={props.field.onChange}
                    error={errors.endYear ? true : false}>
                    {years.map((year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                  </Select>
                )}
                name={"endYear"}
                control={control}
                rules={{ required: "*Please select end year" }}
                defaultValue={props.educationInfo.endYear}
              />
            </SelectYear>
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


export default connect(mapStateToProps, mapDispatchToProps)(Education);
