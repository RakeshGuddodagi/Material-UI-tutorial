import {Box,Stack,Divider,Typography ,Grid,Paper} from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{padding:'20px', bgcolor:'#eeeeee'}}>
    <>
      <Stack spacing={2} 
    direction={'column'} 
    sx={{marginTop:'20px',border:'1px solid black', width:'30%'}}
    divider={<Divider orientation="horizontal" flexItem />}>
        <Typography variant='h6'sx={{display:'flex',justifyContent:'center'}}>Tutorial-15</Typography>
        <Box sx={{height:'100px',width:'100px',backgroundColor:'primary.main'}}>
            Box-01
        </Box>
        <Box sx={{height:'100px',width:'100px',bgcolor:'secondary.main'}}>
            Box-02
        </Box>
        <Box sx={{height:'100px',width:'100px',bgcolor:'success.main'}}>
            Box-03
        </Box>
    </Stack>
      <Grid  container columnSpacing={2} rowSpacing={1} my={'10px'}>
        <Grid item xs={6} sm={12} md={6}>
          <Box bgcolor={'primary.main'} sx={{height:'50px'}}>
            box1
          </Box>
        </Grid >
         <Grid item xs={6} sm={12}  md={6}>
          <Box bgcolor={'secondary.main'} sx={{height:'50px'}}>
            box2
          </Box>
        </Grid>
         <Grid item xs={6} sm={12}  md={6}>
          <Box bgcolor={'error.main'} sx={{height:'50px'}}>
            box3
          </Box>
        </Grid>
         <Grid item xs={6} sm={12}  md={6} >
          <Box bgcolor={'success.main'} sx={{height:'50px'}}>
            box4
          </Box>
        </Grid>
      </Grid>

    </>
    </Paper>
    
   
    
  )
}
