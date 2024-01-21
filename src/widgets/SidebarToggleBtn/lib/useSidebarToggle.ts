import { useContext } from "react"
import { SidebarToggleContext } from "./SidebarToggleContext"


interface IUseSidebarToggleResult {
    collapsed: boolean,
    toggleCollapsed: () => void
}

export const useSidebarToggle = ():IUseSidebarToggleResult => {
    const {collapsed, setCollapsed} = useContext(SidebarToggleContext)
    const toggleCollapsed = () => {        
        setCollapsed(!collapsed);
    }
    
    return {
        collapsed, toggleCollapsed
    }
}