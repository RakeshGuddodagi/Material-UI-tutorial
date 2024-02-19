import{Box,TextField,MenuItem} from '@mui/material'
import {useState} from 'react'
export const MuiSelect = () => {
    const[country,setCountry]= useState('')
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value)
    }
  return (
    // Tutorial-08
    <Box width={'300px'}>
        <TextField 
        label='Select Country' 
        select
        fullWidth
        size='small'
        color='success'
        helperText='Select your Country'
        style={{margin:'10px'}}
        value={country} 
        onChange={handleChange}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='USA'>America</MenuItem>
            <MenuItem value='RU'>Russia</MenuItem>
            <MenuItem value='AU'>Austrelia</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
            <MenuItem value='BR'>Brazil</MenuItem>
        </TextField>

    </Box>
  )
}
