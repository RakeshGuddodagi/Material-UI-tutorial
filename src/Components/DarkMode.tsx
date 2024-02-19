// import React, { useState } from 'react'
// import{Stack,} from '@mui/material'
import { Button, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import {Switch} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export const Button1 = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    // Define custom theme for dark mode
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    // Define custom theme for light mode
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

  return (
    <>
     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {/* <Button variant='contained' onClick={toggleDarkMode} sx={{width:'150px'}}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button> */}
        <Switch {...label} defaultChecked onClick={toggleDarkMode} color='default'/>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
        
        
    
    </ThemeProvider>  
    </>

  )
}
