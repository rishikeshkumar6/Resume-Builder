import { Avatar, Button, Paper} from '@mui/material'
import React from 'react'
import './PersonalInfo.css'
import Input from '../Input/Input'





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
      <form className='inputs' action="">
      <div className='grido'>
      <Input 
      className="FirstName" 
      label={"First Name"}
      type={"text"}
      value={''}
   
      />
      <Input 
      className="LastName"
      label={"Last Name"}
      type={"text"}
      value={''}

      />
      <Input 
      className="Email"
      label={"Email"}
      type={"email"}
      value={''}

      />
      <Input 
      className="Mobile"
      label={"Mobile Number"}
      type={"number"}
      value={''}


      />
      </div>
      <Input 
      className="Address"
      label={"Address"}
      type={"text"}
      value={''}


      />
      <div className='grido'>
      <Input 
      className="City"
      label={"City"}
      type={"text"}
      value={''}

      />
      <Input 
      className="State"
      label={"State"}
      type={"text"}
      value={''}

      />
      <Input 
      className="PinCode"
      label={"Pin Code"}
      type={"number"}
      value={''}

      />
      </div>
      <Input 
      className="Objective"
      label={"Objective"}
      type={"text"}
      value={''}

      />
      </form>
      <hr />
      <div align="right" >
      <Button  className='NextButton' variant="contained">Next</Button>
      </div>
    </Paper>
  )
}

export default PersonalInfo;
