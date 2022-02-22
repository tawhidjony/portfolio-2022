import React, { useCallback } from 'react'

const UseThemeToggle = () => {
  const [theme, setTheme] = React.useState('dark')

  const ToggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme])
  console.log('theme', theme);
  
  return [theme, ToggleTheme]
}

export default UseThemeToggle