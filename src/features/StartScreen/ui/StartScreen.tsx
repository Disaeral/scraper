import { StartBtn } from 'widgets/StartBtn'
import cls from './StartScreen.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'

interface IStartScreenProps {
    className?: string
}

export const StartScreen = ({ className }: IStartScreenProps): JSX.Element => {
    const [started, setStarted] = useState(false)

    const handleStartClick = (e: React.MouseEvent<HTMLElement>): void => {
        setStarted(!started)
    }
    return (
        <div className={classNames(cls.StartScreen, [className])}>
            <div className={classNames('', [], { [cls.ImageContainer]: started })}>
                <div className={classNames(cls.content)}>
                    {started ? 2 : 1 }
                    <StartBtn clickHandler={handleStartClick} />
                </div>
            </div>
        </div>
    )
}
