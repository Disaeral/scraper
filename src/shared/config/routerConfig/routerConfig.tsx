import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

import { RouteProps } from "react-router-dom";

enum AppRouteNames {
    MAIN='main',
    ABOUT='about',
}

type NavbarPath = {
    to: string;
    label: string;
}



const RoutePath: Record<AppRouteNames, string> = {
    [AppRouteNames.ABOUT]: '/about',
    [AppRouteNames.MAIN]: ''
}

export const navbarConfig: Array<NavbarPath> = [
    {
        to: RoutePath.main,
        label: 'Main Page',
    },
    {
        to: RoutePath.about,
        label: 'About Us',
    }
]  

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.about,
        element: <AboutPage />,
    }
]  