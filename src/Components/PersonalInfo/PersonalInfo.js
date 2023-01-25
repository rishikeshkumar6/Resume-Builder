import { Avatar, Button, Paper } from '@mui/material'
import React from 'react'
import './PersonalInfo.css'
import Input from '../Input/Input'
import { connect } from "react-redux";
import { addPersonalInfo } from "../../Redux/actions/actions";

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfoReducer.personalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
});

const handleBackNext = (data) => {

}

const PersonalInfo = (props) => {
  return (
    <Paper className='Paper' elevation={4} >
      <Avatar
        sx={{ width: 130, height: 130, margin: '20px 0px 0px 20px' }}
        alt="profile img"
        src=''
      />
      <div className='change-profile'>
        <Button variant="outlined">Set Profile Picture</Button>
      </div>
      <hr />
      <form className='inputs' onSubmit={handleBackNext}>
        <div className='grido'>
          <Input
            className="FirstName"
            label={"First Name"}
            type={"text"}
            value={props.personalInfo.firstName}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                firstName: value,
              })}
          />
          <Input
            className="LastName"
            label={"Last Name"}
            type={"text"}
            value={props.personalInfo.lastName}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                lastName: value,
              })}
          />
          <Input
            className="Email"
            label={"Email"}
            type={"email"}
            value={props.personalInfo.email}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                email: value,
              })}
          />
          <Input
            className="Mobile"
            label={"Mobile Number"}
            type={"number"}
            value={props.personalInfo.mobile}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                mobile: value,
              })}
          />
        </div>
        <Input
          className="Address"
          label={"Address"}
          type={"text"}
          value={props.personalInfo.address}
          setValue={(value) =>
            props.onAddPersonalInfo({
              ...props.personalInfo,
              address: value,
            })}
        />
        <div className='grido'>
          <Input
            className="City"
            label={"City"}
            type={"text"}
            value={props.personalInfo.city}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                city: value,
              })
            }
          />
          <Input
            className="State"
            label={"State"}
            type={"text"}
            value={props.personalInfo.state}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                state: value,
              })
            }
          />
          <Input
            className="PinCode"
            label={"Pin Code"}
            type={"number"}
            value={props.personalInfo.pinCode}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                pinCode: value,
              })
            }
          />
        </div>
        <Input
          className="Objective"
          label={"Objective"}
          type={"text"}
          value={props.personalInfo.objective}
          setValue={(value) =>
            props.onAddPersonalInfo({
              ...props.personalInfo,
              objective: value,
            })}
        />
      </form>
      <hr />
      <div align="right" >
        <Button
          className='NextButton'
          variant="contained"
          onClick={props.click}
        >Next</Button>
      </div>
    </Paper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);