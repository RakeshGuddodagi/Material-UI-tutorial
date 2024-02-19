import { Stack,Link,Typography} from '@mui/material'

export const MuiLink = () => {
  return (
   <Stack spacing={2} direction={'row'}>
    <Link underline='none'  variant='h6' href='https://www.msn.com/en-in/news/India/shashi-tharoor-reacts-to-release-of-indian-navy-veterans-by-qatar/ar-BB1i99F2?ocid=msedgntp&pc=U531&cvid=3da1dea161af4d66a06babde2d92c239&ei=14'>link</Link>
    <Typography variant='h6'  >
        <Link href='#' color='secondary'underline='hover' >
            Secondary
        </Link>
    </Typography>
   </Stack>
  )
}
