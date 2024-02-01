import { SearchPostsInput } from 'features/SearchPostsInput'
import { Card } from 'shared/ui/Card/Card'
import cls from './MainPage.module.scss'

const MainPage = (): JSX.Element => {
    return (
        <div>
            <Card className={cls.SearchFieldCard}>
                <SearchPostsInput />
            </Card>
        </div>
    )
}

export default MainPage
