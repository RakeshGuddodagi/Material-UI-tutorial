import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' marginTop={8}>h1-heading</Typography>
        
        <Typography variant='h2'>h2-heading</Typography>
        
        <Typography variant='h3'>h3-heading</Typography>
        
        <Typography variant='h4' component='h1' gutterBottom>h4-heading</Typography>
        
        <Typography variant='h5' sx={{marginBottom:'11.90px'}}>h5-heading</Typography>
        
        <Typography variant='h6'>h6-heading</Typography>

        <Typography variant='subtitle1'>Subtitle-1</Typography>
        <Typography variant='subtitle2'>Subtitle-2</Typography>
        


        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam consequatur officiis ex nostrum fugiat distinctio repellendus? Eos laborum, dolorum quisquam, facere veniam, modi voluptas architecto harum repellendus sapiente non dignissimos.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat minima voluptates nobis molestiae saepe adipisci repudiandae alias illo maiores consectetur, atque, tenetur nisi repellat dolorem quibusdam velit! Fuga, tempora?</Typography>
    </div>
  )
}
