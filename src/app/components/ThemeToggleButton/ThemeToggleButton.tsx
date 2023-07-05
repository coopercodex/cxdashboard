import React from 'react'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material';
import { Typography, useMediaQuery } from '@mui/material';


export type ThemeToggleButtonProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void; }>;
}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {

  const mobile = useMediaQuery('(min-width: 700px)')
  const { ColorModeContext = React.createContext({ toggleColorMode: () => { } }) } = props;
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  return (
    <>
      {mobile && (
        <Typography>{theme.palette.mode}</Typography>
      )}
      <IconButton sx={{ mr: 2 }} title={theme.palette.mode + 'mode'} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </>
  )
}

export default ThemeToggleButton;
