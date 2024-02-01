import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

import { type RouteProps } from 'react-router-dom'

enum AppRouteNames {
    MAIN = 'main',
    ABOUT = 'about',
}

interface NavbarPath {
    to: string
    label: string
}

const RoutePath: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.MAIN]: ''
}

export const navbarConfig: NavbarPath[] = [
    {
        to: RoutePath.main,
        label: 'Main Page'
    },
    {
        to: RoutePath.about,
        label: 'About Us'
    }
]

export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />
    },
    {
        path: RoutePath.about,
        element: <AboutPage />
    }
]
