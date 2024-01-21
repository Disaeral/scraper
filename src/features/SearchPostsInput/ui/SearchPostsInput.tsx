import { ChangeEvent, useState } from 'react';
import cls from './SearchPostsInput.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ISearchPostsProps {
    className?: string;
}

export const SearchPostsInput = ({className}: ISearchPostsProps) => {
    const [query, setQuery] = useState("");
    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return (
        <div className={classNames(cls.SearchPosts, [className])}>
            <input type="text" onChange={handleInput}/>
        </div>
    );
};