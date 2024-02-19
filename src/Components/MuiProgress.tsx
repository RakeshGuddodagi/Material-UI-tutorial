import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500', display:"flex" , justifyContent:'center'}} spacing={2} direction="row"  >
      <CircularProgress color="secondary"  size={100}/>
     
    </Stack>
  );
}