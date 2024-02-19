import{Stack} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

export const MuiLoadingbutton = () => {
  return (
   <Stack spacing={2} direction={'row'}>
     <LoadingButton variant='outlined' color='secondary'>Submit</LoadingButton>
     <LoadingButton loading variant='outlined'>Submit</LoadingButton>

     <LoadingButton variant='outlined' loadingIndicator='LOADIN....'>LOADING</LoadingButton>
     <LoadingButton loading variant='outlined' loadingIndicator='LOADIN....'>Submit</LoadingButton>

     <LoadingButton variant='outlined' loadingPosition='start' startIcon={<SaveIcon/>}>Fetch Data</LoadingButton>
     <LoadingButton variant='outlined' loadingPosition='start' loading startIcon={<SaveIcon/>}>Fetch Data</LoadingButton>
   </Stack>
  )
}
