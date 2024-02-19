// import React from 'react'
import {Button,Stack,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlineIcon from '@mui/icons-material/FormatUnderlined'


export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <Button variant='text' href='https://www.bing.com/search?pglt=41&q=google+chrome&cvid=22025f7724d3401889dd361fe77544f2&gs_lcrp=EgZjaHJvbWUqBggEEC4YQDIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQLhhAMgYIBBAuGEAyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDwyBggIEEUYPNIBCDUwNDJqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>

        </Stack>
        {/* Button color */}
        <Stack spacing={2} direction={'column'} width={'40px'}>
            <Button variant='contained' color='primary'><u>primary</u></Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>
        {/* Button Size */}
        <Stack display='block'spacing={2} direction={'row'} >
            <Button variant='contained' size='small'>smll</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button variant='contained' startIcon={<SendIcon/> } disableRipple onClick={()=>alert('clicked')}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send'color='success' size='small'>
                <SendIcon/>
            </IconButton>
            
        </Stack>
        <Stack >
            <AccessTimeIcon style={{height:'100px',width:'100px'}}/>
        </Stack>
        <Stack direction={'row'}>
            <ButtonGroup variant='contained' size='medium' orientation='vertical' >
                <Button onClick={()=>alert('left clicked')}>left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>
        </Stack>
        <Stack>
            <ToggleButtonGroup>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underline'><FormatUnderlineIcon/></ToggleButton>
            </ToggleButtonGroup>

        </Stack>
        
       
    </Stack>
  )
}
