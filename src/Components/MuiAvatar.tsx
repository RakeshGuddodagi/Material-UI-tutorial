import { Stack,Avatar,AvatarGroup} from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack>
        <Stack direction={'row'} spacing={1}>
            <AvatarGroup>
            <Avatar  src='https://prosper.insurance/wp-content/uploads/2020/11/male-icon-avatar-9.png' alt='person3'>PM</Avatar>
            <Avatar src='https://prosper.insurance/wp-content/uploads/2020/11/male-icon-avatar-5.png' alt='person2'></Avatar>
            <Avatar src='https://media.architecturaldigest.com/photos/5f241de2c850b2a36b415024/master/w_1600%2Cc_limit/Luke-logo.png' alt='person1'></Avatar>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>

            </AvatarGroup>
        </Stack>
        <Stack direction={'row'} spacing={1}>
            <AvatarGroup max={3}>
            <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            
            </AvatarGroup>
        </Stack>
        <Stack direction={'row'} spacing={1}>
            <AvatarGroup>
            <Avatar variant='rounded'    sx={{bgcolor:'primary.light'}}>BW</Avatar>
            <Avatar variant='rounded'    sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar variant='rounded'    sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            <Avatar variant='rounded'    sx={{bgcolor:'secondary.light'}}>CK</Avatar>
            
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}
