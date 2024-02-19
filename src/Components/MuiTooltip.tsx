import {Tooltip,IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const MuiTooltip = () => {
  return (
    <Tooltip title='delete' placement='right' arrow enterDelay={500} leaveDelay={200}>
        <IconButton>
            <DeleteOutlineIcon/>
        </IconButton>
    </Tooltip>
  )
}
