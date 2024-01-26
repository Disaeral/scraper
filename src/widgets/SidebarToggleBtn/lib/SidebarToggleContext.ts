import { createContext } from 'react'

interface ISidebarToggleContextProps {
  collapsed?: boolean
  setCollapsed?: (c: boolean) => void
}

export const SidebarToggleContext = createContext<ISidebarToggleContextProps>({})
