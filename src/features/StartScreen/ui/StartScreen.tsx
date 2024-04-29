import { StartBtn } from 'widgets/StartBtn'
import cls from './StartScreen.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { SearchPostsInput } from 'features/SearchPostsInput'

interface IStartScreenProps {
    className?: string
}

export const StartScreen = ({ className }: IStartScreenProps): JSX.Element => {
    const [started, setStarted] = useState(false)

    const handleStartClick = (e: React.MouseEvent<HTMLElement>): void => {
        setStarted(!started)
    }
    return (
        <div className={classNames(cls.StartScreen, [className], { [cls.started]: started })}>
            <div className={classNames(cls.content)}>
                {started && <SearchPostsInput /> }
                <StartBtn clickHandler={handleStartClick} />
                <div className={classNames(cls.squares)}>
                    <div className={classNames(cls.square, [], { [cls.toggled]: started })}>
                        <div className={classNames(cls.squareBackground)}></div>
                    </div>
                    <div className={classNames(cls.square, [], { [cls.toggled]: started })}>
                        <div className={classNames(cls.squareBackground)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
