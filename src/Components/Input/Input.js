import { TextField } from '@mui/material'
import React from 'react'
import './Input.css'
// import { Checks } from './Checks'

const Input = (props) => {
  return (
      <TextField
        // error={props.error}
        error={props.value === "" ? true : false}
        className='inputTF'
        variant='outlined'
        label={props.label}
        type={props.type}
        name={props.name} 
        // {...props.register(props.name, Checks(props.type, props.name))}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value.toString())}
        helperText={props.value ==="" ? "*Please fill this field" : null}
        // helperText={props.errorMessage ? props.errorMessage : null}
      />
  )
}

export default Input
