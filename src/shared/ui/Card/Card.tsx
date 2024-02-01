import cls from './Card.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ICardProps extends React.PropsWithChildren {
    className?: string
}

export const Card = ({ className, children }: ICardProps): JSX.Element => {
    return (
        <div className={classNames(cls.Card, [className])}>
            {children}
        </div>
    )
}
