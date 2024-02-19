import './App.css';
import { MuiButton } from './Components/MuiButton';
import { MuiTypography } from './Components/MuiTypography';
import { MuiTextField } from './Components/MuiTextField';
import {MuiSelect} from './Components/MuiSelect';
import {MuiRadioButton}from './Components/MuiRadioButton';
import { MuiCheckbox} from './Components/MuiCheckbox';
import { MuiSwitch } from './Components/MuiSwitch';
import { MuiRating } from './Components/MuiRating';
import { AutoComplete} from './Components/AutoComplete';
import { MuiLayout } from './Components/MuiLayout';
import  RecipeReviewCard  from './Components/MuiCard';
import { MuiAccordin } from './Components/MuiAccordin';
import { MuiImagelist } from './Components/MuiImagelist';
import { MuiNavbar} from './Components/MuiNavbar';
import { MuiLink} from './Components/MuiLink'
import { MuiBredcrumbs} from './Components/MuiBredcrumbs';
 import  PersistentDrawerLeft from './Components/MuiDrawer';
// import TemporaryDrawer from './Components/MuiDrawer';
import { MuiSpeedDial} from './Components/MuiSpeedDial';

import {MuiBottomNavigation} from './Components/MuiBottomNavigation';
import {MuiAvatar} from './Components/MuiAvatar';
import MuiBadge from './Components/MuiBadge';
import {MuiList} from './Components/MuiList';
import {MuiChip} from './Components/MuiChip'
import {MuiTooltip} from './Components/MuiTooltip';
import BasicTable from './Components/MuiTable';
import {MuiAlert} from './Components/MuiAlert'
import CustomizedSnackbars from './Components/MuiSnackbar';
import  SimpleDialogDemo from './Components/MuiDialog';
import CircularColor from './Components/MuiProgress';
import Variants from './Components/MuiSkeleton';
import {MuiLoadingbutton } from './Components/MuiLoadingbutton';
import BasicTabs from './Components/MuiTab';
import CustomizedTimeline from './Components/MuiTimeline';
import ImageMasonry from './Components/MuiMasnory';
import { Stack } from '@mui/material';
import  {Button1}  from './Components/DarkMode';





  


function App() {
  return (
    
    <Stack>
      {/* <Button1/> */}
      <MuiNavbar/>
      <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <MuiSelect/>
      <MuiRadioButton/>
      <MuiCheckbox/>
      <MuiSwitch/>
      <MuiRating/>
      <AutoComplete/>
      <MuiLayout/>
      <RecipeReviewCard/>
      <MuiAccordin/>
      <MuiImagelist/>
      
      <MuiLink/>
      <MuiBredcrumbs/> 
      {/* <PersistentDrawerLeft/> */}
      <MuiSpeedDial/>
      
      <MuiAvatar/>
      <MuiBadge/>
      <MuiList />
      <MuiChip/>
      <MuiTooltip/>
      <BasicTable/>
      <MuiAlert/>
      <CustomizedSnackbars/>
      <SimpleDialogDemo/>
      <CircularColor/>
      <Variants/>
      <MuiLoadingbutton/>
      <BasicTabs/>
      <CustomizedTimeline/>
      <ImageMasonry/>
      <MuiBottomNavigation/>
    </Stack>
    
    
  );
}

export default App;
