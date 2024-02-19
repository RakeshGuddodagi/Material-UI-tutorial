// TUTORIAL NO-10
import { Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup, FormHelperText} from '@mui/material';
import { useState } from 'react';

export const MuiCheckbox = () => {
    const[acceptTnC,setAcceptTnC]= useState(false);
    console.log(acceptTnC);
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setAcceptTnC(event.target.checked)
    }
  return (
   <Box>
        <Box>
            <FormControlLabel 
            label='I accept terms and conditions' 
            control={<Checkbox checked={acceptTnC} onChange={handleChange} />}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup row>
                    <FormControlLabel 
                    label='HTML'
                    control={<Checkbox  color='primary' size='small'/>}/>
                    
                    <FormControlLabel 
                    label='CSS'
                    control={<Checkbox  color='secondary' size='medium'/>}/>
                    
                    <FormControlLabel 
                    label='JavaScript'
                    control={<Checkbox  color='success'  />}/>
                </FormGroup>
                <FormHelperText error>Select your skill</FormHelperText>
            </FormControl>
        </Box>
   </Box>
  )
};
