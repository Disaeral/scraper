import cls from './SidebarToggleBtn.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { useSidebarToggle } from '../lib/useSidebarToggle'

interface ISidebarToggleBtnProps {
  className?: string
}

export const SidebarToggleBtn = ({ className }: ISidebarToggleBtnProps): JSX.Element => {
  const { _, toggleCollapsed } = useSidebarToggle()
  const handleSidebarToggle = (): void => {
    if (toggleCollapsed !== undefined) {
      toggleCollapsed()
    }
  }

  return (
      <div className={classNames(cls.SidebarToggleBtn, [className ?? ''])}>
          <Button onClick={handleSidebarToggle}>toggle</Button>
      </div>
  )
}
