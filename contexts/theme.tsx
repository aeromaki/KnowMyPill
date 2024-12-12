import React, { createContext, useContext, useEffect, useReducer } from "react"
import { Theme, DEFAULT_THEME } from "../types"
import { getItem, setItem } from "../storage"


function themeReducer(theme: Theme, action: Theme): Theme {
  setItem('theme', action)
  return action
}

export const ThemeContext = createContext<Theme>(DEFAULT_THEME)
export const ThemeDispatchContext = createContext<React.Dispatch<Theme>>(() => { })

export function ThemeProvider({ children }: {
  children: React.ReactNode
}) {
  const [theme, themeDispatch] = useReducer(
    themeReducer,
    DEFAULT_THEME
  )

  useEffect(() => {
    const getTheme = async () => {
      return await getItem<Theme>('theme') ?? DEFAULT_THEME
    }

    getTheme().then(themeDispatch)
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={themeDispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}

export function useThemeDispatch(): React.Dispatch<Theme> {
  return useContext(ThemeDispatchContext)
}