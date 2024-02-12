import { StartScreen } from 'features/StartScreen/ui/StartScreen'
import cls from './MainPage.module.scss'
const MainPage = (): JSX.Element => {
    return (
        <div className={cls.MainWrapper}>
            <StartScreen />
        </div>
    )
}

export default MainPage
