import { Stack,Chip,Avatar} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export const MuiChip = () => {
  return (
   <Stack  direction='row' marginTop={2} spacing={2} >
    <Chip  label='chip' color='primary' size='medium' icon={<TagFacesIcon/>}/>
    <Chip  
    label='outlined' 
    color='secondary'
    size='medium'
    variant='outlined'
    avatar={<Avatar>P</Avatar>} />
    <Chip 
    label='Clicked' 
    color='success' 
    variant='outlined' 
    onClick={()=> alert('Success')}
    onDelete={() => alert('Delete handle clicked') } />
   </Stack>
  )
}
