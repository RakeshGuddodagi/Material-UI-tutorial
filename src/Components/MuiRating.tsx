import React from 'react'
import{Stack,Rating} from '@mui/material';

export const MuiRating = () => {
  return (
   <Stack spacing={2}>
    <Rating/>
    <Rating  precision={0.5}  sx={{color:'red'}}/>
    <Rating  precision={0.5}  sx={{color:'green'}}/>
   </Stack>
  )
}
