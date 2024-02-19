// import React from 'react'
// import { TextField } from '@mui/icons-material'
import {Stack,TextField,InputAdornment} from '@mui/material'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from 'react';

export const MuiTextField = () => {
    const [value,setValue]=useState('')
  return (
   <Stack spacing={1}>
        <Stack direction='row' spacing={4}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
        
        <Stack direction={'row'} spacing={4}>
        <TextField label='Name' variant='outlined' size='small' color='secondary'/>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <TextField label='Form input' required/> 
            <TextField label='Form input' helperText='Please do not share your password' required error/>
            <TextField label='Password' type='password' helperText='Please do not share your password' required/>
            <TextField label='Read Only' InputProps={{readOnly:false}}/>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <TextField label='Amount' InputProps={{
                startAdornment:<InputAdornment position='start'><CurrencyRupeeIcon/></InputAdornment>
            }}/>
            <TextField label='Mobile-No' helperText='Enter your valid Number' size='small' style={{width:'300px'}} InputProps={{
                endAdornment:<InputAdornment position='end'><AddIcCallIcon/></InputAdornment>
            }}/>
           
        </Stack>
        
      
   </Stack>

  )
}
