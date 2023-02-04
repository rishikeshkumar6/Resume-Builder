import React from 'react'
import './NextnBackBTN.css'
import { Button, CircularProgress } from '@mui/material'

// This component renders two buttons, "Next" and "Back".
// It receives the button text, handle functions and loading status as props
// and based on the loading status, it shows a loading indicator or the button.
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
