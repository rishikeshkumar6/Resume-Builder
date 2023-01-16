import { Avatar, Button, Paper, TextField } from '@mui/material'
import React from 'react'
import './PersonalInfo.css'

const PersonalInfo = () => {
  return (
    <Paper className='Paper' elevation={2} >
    <Avatar
        sx={{ width: 130, height: 130, margin: '20px 0px 0px 20px' }}
        alt="profile img"
        src=''
      /> 
      <div className='change-profile'>
      <Button variant="outlined">Set Profile Picture</Button>
      </div>
      <hr />
      <form className='inputs' action="">
      <TextField className="FirstName" label="First Name" variant="outlined" />
      <TextField className="LastName" label="Last Name" variant="outlined" />
      <TextField className="Email" label="Email" variant="outlined" />
      <TextField className="Mobile" label="Mobile" variant="outlined" />
      <TextField className="Address" label="Address" variant="outlined" />
      <TextField className="City" label="City" variant="outlined" />
      <TextField className="State" label="State" variant="outlined" />
      <TextField className="PinCode" label="Pin Code" variant="outlined" />
      <TextField className="Objective" label="Objective" variant="outlined" />
      </form>
      <hr />
      <div align="right" >
      <Button  className='NextButton' variant="contained">Next</Button>
      </div>
    </Paper>
  )
}

export default PersonalInfo