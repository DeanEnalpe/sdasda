import { useState } from 'react'
import './App.css'
import Login from './components/templates/Login/Login';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import CreateAccount from './components/templates/CreateAccount/CreateAccount';

function App() {
  // const [count, setCount] = useState(0)
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme == 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
     <Login />
     {/* <CreateAccount /> */}
    </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
