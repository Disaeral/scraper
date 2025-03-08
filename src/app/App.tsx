import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import AppRouter from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import 'shared/config/i18n/i18nConfig'
import { Suspense, useEffect, useState } from 'react'
import { DesktopSidebar } from 'widgets/DesktopSidebar'

export const App = (): JSX.Element => {
    const { theme } = useTheme()
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsDesktop(window.innerWidth >= 1200)
        })
    }, [])
    console.log('is it workkin...')
    return (
        <div className={classNames('app', [theme], {})}>
            <Suspense fallback={'Loading...'}>
                <Navbar />
                <div className={'page-content'}>
                    {isDesktop ? <DesktopSidebar /> : <Sidebar/>}
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
