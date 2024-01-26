import { useContext } from 'react'
import { SidebarToggleContext } from './SidebarToggleContext'

interface IUseSidebarToggleResult {
  collapsed?: boolean
  toggleCollapsed?: () => void
}

export const useSidebarToggle = (): IUseSidebarToggleResult => {
  const { collapsed, setCollapsed } = useContext(SidebarToggleContext)
  if (collapsed === undefined || setCollapsed === undefined) return {}
  const toggleCollapsed = (): void => {
    setCollapsed(!collapsed)
  }

  return {
    collapsed, toggleCollapsed
  }
}
