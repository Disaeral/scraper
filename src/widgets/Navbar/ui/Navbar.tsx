import { useEffect, useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkAccent } from 'shared/ui/AppLink/AppLink'
import { navbarConfig } from 'shared/config/routerConfig/routerConfig'
import { SidebarToggleBtn } from 'widgets/SidebarToggleBtn'
import CastleIcon from 'shared/assets/icons/castle.svg'
import { useDebouncedCallback } from 'shared/lib/useDebounce/useDebounce'

interface INavbarProps {
    className?: string
    activeLink?: string
    scrolled?: boolean
}

export const Navbar = ({ className }: INavbarProps): JSX.Element => {
    const [activeLink, setActiveLink] = useState('')
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = (): void => {
        if (window.scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    onscroll = useDebouncedCallback(handleScroll, 200)

    const handleLinkClick = (link: string): void => {
        setActiveLink(link)
    }

    return (
        <nav className={classNames(cls.navbar, [className], { [cls.scrolled]: scrolled })}>
            <SidebarToggleBtn />
            <CastleIcon className={cls.logo} />
            <div className={cls.links}>
                {navbarConfig.map(({ to, label }, id) => {
                    return <AppLink
                        key={id + to + Math.random()}
                        to={to}
                        accent={AppLinkAccent.SECONDARY}
                        isActive={to === activeLink}
                        onClick={() => { handleLinkClick(to) }}
                    >
                        {label}
                    </AppLink>
                })}
            </div>

        </nav>
    )
}
