import {Stack,Alert, AlertTitle,Button ,Grid} from '@mui/material'

export const MuiAlert = () => {
  return (
    
    <Stack spacing={2}>
      <Grid item xs={6} sm={12} md={6}>
        <Alert severity='error'>This is an error alert</Alert>
      </Grid>
      <Grid item xs={6} sm={12} md={6}>
        <Alert severity='warning'>This is an warning alert</Alert>
      </Grid>
      <Grid item xs={6} sm={12} md={6}>
        <Alert severity='info'>This is an info alert</Alert>
      </Grid>
      <Grid item xs={6} sm={12} md={6}>
        <Alert severity='success'>This is an success alert</Alert>
      </Grid>
    
    
        
        <Alert variant='outlined' severity='error'>This is an error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is an warning alert</Alert>
        <Alert variant='outlined' severity='info'>This is an info alert</Alert>
        <Alert variant='outlined' severity='success'>This is an success alert</Alert>

       
        <Alert variant='filled' severity='error' onClose={()=> alert('close alert')}>  <AlertTitle>Error</AlertTitle>This is an error alert</Alert>
        <Alert variant='filled' severity='warning'><AlertTitle>Warning</AlertTitle>This is an warning alert</Alert>
        <Alert variant='filled' severity='info'><AlertTitle>Info</AlertTitle>This is an info alert</Alert>
        <Alert variant='filled' severity='success'><AlertTitle>Success</AlertTitle>This is an success alert</Alert>
    </Stack>
   
  )
}
