import cls from './StartBtn.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface IStartBtnProps {
    className?: string
    clickHandler?: (e: React.MouseEvent<HTMLElement>) => void
}

export const StartBtn = ({ className, clickHandler }: IStartBtnProps): JSX.Element => {
    return <div className={classNames(cls.StartBtn, [className])} onClick={clickHandler}>
        {'start'}
    </div>
}
