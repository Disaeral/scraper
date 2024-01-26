import { useState } from 'react'
import cls from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkAccent } from 'shared/ui/AppLink/AppLink'
import { navbarConfig } from 'shared/config/routerConfig/routerConfig'
import { SidebarToggleBtn } from 'widgets/SidebarToggleBtn'

interface INavbarProps {
  className?: string
  activeLink?: string
}

export const Navbar = ({ className }: INavbarProps): JSX.Element => {
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (link: string): void => {
    setActiveLink(link)
  }

  return (
      <nav className={classNames(cls.navbar, [className])}>
          <SidebarToggleBtn />
          <div className={cls.logo}>

          </div>
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
