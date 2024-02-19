// import React, { useState } from 'react';
// import { Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';

// const RadioButton = () => {
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <FormControl component="fieldset">
//       <RadioGroup
//         aria-label="gender"
//         name="gender1"
//         value={selectedValue}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//       </RadioGroup>
//     </FormControl>
//   );
// };

// export default RadioButton;

import {Box,FormControl,FormLabel,FormControlLabel,RadioGroup,Radio} from '@mui/material';

export const MuiRadioButton = () => {
  return (
    <Box sx={{height:'200px', width:'200px', border:'1px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <FormControl>
        {/* FormLabel id should be same RadioGroupLabel aria-labelledby */}
            <FormLabel id='radiobutton' color='success'> 
                Years of Experience
            </FormLabel>
            <RadioGroup aria-labelledby='radiobutton' name='job experience group' >
                <FormControlLabel control={<Radio color='success'/> }  label='0-2' value='0-2'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='3-4' value='3-4'></FormControlLabel>
                <FormControlLabel control={<Radio/>} label='5-6' value='5-6'></FormControlLabel>

            </RadioGroup>
        </FormControl>

    </Box>
  )
}

