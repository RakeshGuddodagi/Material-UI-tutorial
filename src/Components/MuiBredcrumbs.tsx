import { Box,Link,Breadcrumbs,Typography,Divider} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBredcrumbs = () => {
  return (
   <Box m={2} >
    <Breadcrumbs aria-aria-label='Breadcrumb' >
         <Link variant='h4' underline='hover' href='#'>Google</Link>
         <Link variant='h4' underline='hover' href='#'>Facebook</Link>
         <Link variant='h4' underline='hover' href='#'>Twitter</Link>
         <Typography variant='h4' >Websites</Typography>
    </Breadcrumbs>
    <Divider/>
    <Breadcrumbs aria-aria-label='Breadcrumb' separator='-' itemsBeforeCollapse={2} >
         <Link variant='h6' underline='hover' href='#'>Google</Link>
         <Link variant='h6' underline='hover' href='#'>Facebook</Link>
         <Link variant='h6' underline='hover' href='#'>Twitter</Link>
         <Link variant='h6' underline='hover' href='#'>Instagram</Link>
         <Link variant='h6' underline='hover' href='#'>Whatsapp</Link>
    </Breadcrumbs>
    <Divider/>
    <Breadcrumbs aria-aria-label='Breadcrumb' maxItems={3} separator={< NavigateNextIcon fontSize='large'/>} >
         <Link variant='h6' underline='hover' href='#'>Google</Link>
         <Link variant='h6' underline='hover' href='#'>Facebook</Link>
         <Link variant='h6' underline='hover' href='#'>Twitter</Link>
         <Link variant='h6' underline='hover' href='#'>Instagram</Link>
         <Link variant='h6' underline='hover' href='#'>Whatsapp</Link>
    </Breadcrumbs>
    <Divider/>
       
   </Box>
  )
}
