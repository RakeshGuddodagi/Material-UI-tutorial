import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import {Stack , Box} from '@mui/material';

export default function Variants() {
  return (
    <Stack columnGap={3} direction={'row'} sx={{marginBottom:'50px'}}>
        <Box>
         <Skeleton variant="rectangular" width={260} height={210} sx={{m:'15px'}} />
        
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
           <Box>
             <Skeleton variant="circular" width={50} height={50} sx={{m:'5px'}}/>
           </Box>
            <Box >
              <Skeleton variant="text" width={220} height={20} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={180} height={20} sx={{ fontSize: '1rem' }} />
          </Box>
          </Box>
        </Box>

        <Box>
         <Skeleton variant="rectangular" width={260} height={210} sx={{m:'15px'}} />
        
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
           <Box>
             <Skeleton variant="circular" width={50} height={50} sx={{m:'5px'}}/>
           </Box>
            <Box >
              <Skeleton variant="text" width={220} height={20} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={180} height={20} sx={{ fontSize: '1rem' }} />
          </Box>
          </Box>
        </Box>
        <Box>
         <Skeleton variant="rectangular" width={260} height={210} sx={{m:'15px'}} />
        
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
           <Box>
             <Skeleton variant="circular" width={50} height={50} sx={{m:'5px'}}/>
           </Box>
            <Box >
              <Skeleton variant="text" width={220} height={20} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={180} height={20} sx={{ fontSize: '1rem' }} />
          </Box>
          </Box>
        </Box>
        <Box>
         <Skeleton variant="rectangular" width={260} height={210} sx={{m:'15px'}} />
        
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
           <Box>
             <Skeleton variant="circular" width={50} height={50} sx={{m:'5px'}}/>
           </Box>
            <Box >
              <Skeleton variant="text" width={220} height={20} sx={{ fontSize: '1rem' }} />
              <Skeleton variant="text" width={180} height={20} sx={{ fontSize: '1rem' }} />
          </Box>
          </Box>
        </Box>
        
    </Stack>

   
  );
}
