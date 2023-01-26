import { TextField } from '@mui/material'
import React from 'react'
import './Input.css'



const Input = (props) => {
  return (
    <>
      <TextField
        className='inputTF'
        variant='outlined'
        label={props.label}
        type={props.type}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value.toString())}
        error={props.error}
        helperText={props.errorMessage ? props.errorMessage : null}
      />
    </>
  )
}

export default Input
