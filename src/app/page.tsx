"use client"
import React from 'react'
// import IconButton from '@mui/material/IconButton';
import Dashboard from './dashboard/Dashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Login from './components/login/Login'
import { useSession } from 'next-auth/react'
import { createTheme, CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import scss from './Home.module.scss'
import DarkTheme from './themes/DarkTheme'
import LightTheme from './themes/LightTheme'
// import { ClassNames } from '@emotion/react'
// import Box from '@mui/material/Box';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


export default function Home() {
  const { data: session } = useSession()

  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const darkThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...DarkTheme
      }),
    [mode],
  );

  const lightThemeChosen = React.useMemo(
    () =>
      createTheme({
        ...LightTheme
      }),
    [mode],
  );



  return (
    <main className={scss.main}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
          <Header ColorModeContext={ColorModeContext} />
          <CssBaseline />
          {session && (
            <div className={scss.mainbody}>
              <Sidebar />
              <Dashboard />
            </div>
          )}
          <div className={scss.mainbody}>
            <Login />
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </main>
  )
}
