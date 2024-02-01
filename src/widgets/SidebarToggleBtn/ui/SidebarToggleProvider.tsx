import { type PropsWithChildren, useState } from 'react'
import { SidebarToggleContext } from '../lib/SidebarToggleContext'
export const SidebarToggleProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false)

    return <SidebarToggleContext.Provider value={{ collapsed, setCollapsed }}>
        {children}
    </SidebarToggleContext.Provider>
}
