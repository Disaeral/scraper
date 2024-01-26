import cls from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import { LangSwitch } from 'widgets/LangSwitch/ui/LangSwitch'
import { useSidebarToggle } from 'widgets/SidebarToggleBtn'

interface ISidebarProps {
  className?: string
  // collapsed: boolean;
}

export const Sidebar = (props: ISidebarProps): JSX.Element => {
  const { className } = props
  const { collapsed } = useSidebarToggle()
  return (
      <div className={classNames(cls['Sidebar-wrapper'], [], { [cls.collapsed]: collapsed })}>
          <div className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}>
              <div className={classNames(cls.switchers)}>
                  <ThemeSwitch />
                  <LangSwitch />
              </div>
          </div>
      </div>
  )
}
