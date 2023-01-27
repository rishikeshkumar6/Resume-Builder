//SelectYear.js
import { FormControl, FormHelperText, InputLabel} from "@mui/material";
import React from 'react'
import './SelectYear.css'

const SelectYear = (props) => {
    return (
        <>
            <div className="select">
                <FormControl fullWidth error={props.error}>
                <InputLabel id="demo-multiple-name-label">{props.label}</InputLabel>
                    {props.children}
                    <FormHelperText>{props.errorMessage}</FormHelperText>
                </FormControl>
            </div>
        </>
    )
}

export default SelectYear
