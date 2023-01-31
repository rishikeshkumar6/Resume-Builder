import React from 'react'
import './NextnBackBTN.css'
import { Button, CircularProgress } from '@mui/material'

const NextnBackBTN = (props) => {
  return (
    <div className='containerbtn'>
      {props.click === 0 ? <div /> : (
        <Button
          onClick={props.goBack}
          className='btn'
          variant="outlined"
        >{props.backbtn}</Button>
      )}
      {props.loading ? (
        <CircularProgress size={30} />
      ) : (
        <Button
          className='btn'
          variant='contained'
          type='submit'>
          {props.nextbtn}
        </Button>
      )}
    </div>
  )
}

export default NextnBackBTN
