import { AppBar,Toolbar,IconButton,Typography,Stack,Button} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Button1 } from './DarkMode';

export const MuiNavbar = () => {
  return (
    <AppBar color='secondary'>
        <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <MenuIcon/>
            </IconButton>
            
            <Typography variant='h6' component={'div'} sx={{flexGrow:1}}>      
                MENU
            </Typography>
            <Stack direction={'row'} spacing={2} sx={{display:'flex',alignItems:'center'}}>
                <Button color='inherit'>Home</Button>
                <Button color='inherit'>About-Us</Button>
                <Button color='inherit'>Contact-Us</Button>
                {/* <Button color='inherit'>Login</Button> */}
                <Button1/>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
