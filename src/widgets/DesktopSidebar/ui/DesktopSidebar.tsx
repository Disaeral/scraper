import cls from './DesktopSidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface IDesktopSidebarProps {
    className?: string
}

export const DesktopSidebar = ({ className }: IDesktopSidebarProps): JSX.Element => {
    return (
        <div className={classNames(cls.DesktopSidebar, [className])}>
            {'this one is destop sidebar'}
        </div>
    )
}
