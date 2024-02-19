import {Stack,Autocomplete,TextField, FilledTextFieldProps, OutlinedTextFieldProps, StandardTextFieldProps, TextFieldVariants} from '@mui/material'
// import { JSX } from 'react/jsx-runtime'

const skills=['HTML','CSS','JavaScript','ReactJS','Material UI','Tailwind']
const subjects=['Geography','History','maths','english','hindi','marathi']
export const AutoComplete = () => {
  return (
   <Stack spacing={2} direction='column'  sx={{display:'flex', justifyContent:'space-between'}}>
        <Autocomplete 
        options={skills}
        renderInput={(params)=> <TextField {...params} label='skills' size='small' helperText='Tutorial-13' sx={{marginTop:'20px', width:'400px'}}/>}/>
        <Autocomplete 
        options={subjects}
        renderInput={(params)=> <TextField {...params} label='subjects' size='small' helperText='Tutorial-13' sx={{ width:'400px'}}/>}/>
   </Stack>
   
  )
}
