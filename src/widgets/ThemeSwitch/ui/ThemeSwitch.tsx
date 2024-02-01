import { useTheme, Theme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitch.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

import LightIcon from 'shared/assets/icons/sun-solid.svg'
import DarkIcon from 'shared/assets/icons/moon-solid.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface IThemeSwitchProps {
    className?: string
}

export const ThemeSwitch = ({ className }: IThemeSwitchProps): JSX.Element => {
    const { theme, toggleTheme } = useTheme()
    const { i18n } = useTranslation()

    return (
        <Button theme={ThemeButton.DARK} onClick={toggleTheme} className={classNames(cls.ThemeSwitch, [className])}>
            toggle theme
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}

        </Button>
    )
}
