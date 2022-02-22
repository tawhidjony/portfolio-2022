import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Web from './Routes/Web'
import { GlobalStyle, themes } from './StyleComponents/themes'
const App = () => {
  
  const [ theme, setTheme ] = useState(localStorage.getItem('theme') || 'light')
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  },[theme])

  return (
    <ThemeProvider theme={themes[theme]} >
      <GlobalStyle />
      <BrowserRouter>
        <Web />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App