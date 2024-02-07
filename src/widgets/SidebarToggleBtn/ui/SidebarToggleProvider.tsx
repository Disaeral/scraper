import { type PropsWithChildren, useState } from 'react'
import { SidebarToggleContext } from '../lib/SidebarToggleContext'
export const SidebarToggleProvider = ({ children }: PropsWithChildren): JSX.Element => {
    const [collapsed, setCollapsed] = useState(true)

    return <SidebarToggleContext.Provider value={{ collapsed, setCollapsed }}>
        {children}
    </SidebarToggleContext.Provider>
}
