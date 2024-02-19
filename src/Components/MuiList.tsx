import {Typography,Box ,List,ListItem,ListItemText,ListItemButton,ListItemIcon,ListItemAvatar,Avatar,Divider}
from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export const MuiList = () => {
  return (
   <Box sx={{width:'75%',bgcolor:'#D3D3D3'}}>
    <List>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                    <MailOutlineIcon/> 
                    </Avatar>
                </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='ListItem-01'/>
            
            </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <Avatar>
                <MailOutlineIcon/> 
                </Avatar>
            </ListItemIcon>
            <ListItemText primary='ListItem-02'/>
            </ListItemButton>
            
        </ListItem>
        <Typography sx={{paddingLeft:'73px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo tempora odit et voluptatibus eos suscipit, natus vero doloremque dolorem excepturi esse provident eius enim nesciunt sapiente unde aliquid atque.</Typography>
        <Divider/>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <Avatar>
                <MailOutlineIcon/> 
                </Avatar>
            </ListItemIcon>
            <ListItemText primary='ListItem-03 '/>
            </ListItemButton>
        </ListItem>
        
      
        
      
    </List>
   </Box>
  )
}
