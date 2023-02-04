import { TextField } from '@mui/material'
import React from 'react'
import { Checks } from './Checks'
// The component Input takes in props and returns a Material UI TextField component
const Input = (props) => {
  return (
    <div>
      {/* The TextField component with the following props */}
    <TextField
      error={props.error}
      // error={props.value === "" ? true : false}
      // className='inputTF'
      label={props.label}
      variant='outlined'
      type={props.type}
      name={props.name} 
      multiline={props.multiline}
      rows={props.lines}
      {...props.register(props.name, Checks(props.type, props.name))} 
      value={props.value}
      onChange={(event) => props.setValue(event.target.value.toString())}
      helperText={props.errorMessage}
      // helperText={props.value ==="" ? "*Please fill this field" : null}
      sx={{width:"100%"}}
      // {...props.register(props.name, Checks(props.type, props.name))}
    />
    </div>
  )
}

export default Input

