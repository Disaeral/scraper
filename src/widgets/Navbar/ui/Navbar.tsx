import { useState } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkAccent } from 'shared/ui/AppLink/AppLink';
import { navbarConfig } from 'shared/config/routerConfig/routerConfig';

interface INavbarProps {
    className?: string;
    activeLink?: string;
}

export const Navbar = ({className}: INavbarProps) => {

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link: string) => {
        setActiveLink(link)
    }
    
    return (
        <nav className={classNames(cls.navbar, [className])}>
            <div className={cls.logo}>

            </div>
            <div className={cls.links}>
                {navbarConfig.map(({to, label}) => {
                    return <AppLink 
                        to={to}
                        accent={AppLinkAccent.SECONDARY}
                        isActive={to === activeLink}
                        onClick={() => handleLinkClick(to)}
                    >
                        {label}
                    </AppLink>
                })}
            </div>
            
        </nav>
    );
};