import React from 'react'
import './NextnBackBTN.css'
import { Button } from '@mui/material'

const NextnBackBTN = (props) => {
  return (
    <div className='container'>
        <Button 
            className='btn'
            mr="20px"
            variant={props.variant}
        >{props.btn}</Button>      
    </div>
  )
}

export default NextnBackBTN
