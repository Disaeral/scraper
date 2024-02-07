import { type ChangeEvent, useState } from 'react'
import cls from './SearchPostsInput.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ISearchPostsProps {
    className?: string
}

export const SearchPostsInput = ({ className }: ISearchPostsProps): JSX.Element => {
    const [_, setQuery] = useState('')
    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
    }

    return (
        <div className={classNames(cls.SearchPosts, [className])}>
            <input type="text" onChange={handleInput} className={classNames(cls.Input)}/><Button>{'search'}</Button>
        </div>
    )
}
