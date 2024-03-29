import { type FC, useMemo, useState, type ReactNode } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT

interface IThemeProviderProps {
    children?: ReactNode
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const defaultProps = useMemo(() => (
        {
            theme,
            setTheme
        }
    ), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
