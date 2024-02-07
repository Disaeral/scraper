import { SearchPostsInput } from 'features/SearchPostsInput'
import { Card } from 'shared/ui/Card/Card'
import cls from './MainPage.module.scss'

const MainPage = (): JSX.Element => {
    return (
        <div className={cls.MainWrapper}>
            <Card className={cls.OneViewPort} />
            <Card className={cls.SecondViewPort} />
        </div>
    )
}

export default MainPage
