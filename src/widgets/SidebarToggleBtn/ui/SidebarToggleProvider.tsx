import { PropsWithChildren, useContext, useState } from "react"
import { SidebarToggleContext } from "../lib/SidebarToggleContext"
export const SidebarToggleProvider = ({children}: PropsWithChildren) => {

    const [collapsed, setCollapsed] = useState(false);

    return <SidebarToggleContext.Provider value={{collapsed, setCollapsed}}>
        {children}
    </SidebarToggleContext.Provider>
}