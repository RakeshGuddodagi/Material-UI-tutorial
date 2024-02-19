import { SpeedDial,SpeedDialAction,SpeedDialIcon} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import IosShareIcon from '@mui/icons-material/IosShare';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

export const MuiSpeedDial = () => {
  return (
    <SpeedDial 
     ariaLabel='Navigation speed Dial' 
     sx={{position:'absolute', bottom:16, right:16}}
     icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
    >
    <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle='copy' tooltipOpen/>
    <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' tooltipOpen/>
    <SpeedDialAction icon={<IosShareIcon/>} tooltipTitle='Share' tooltipOpen/>
    <SpeedDialAction icon={< SearchIcon/>} tooltipTitle='Search' tooltipOpen/>
    </SpeedDial>
  )
}
