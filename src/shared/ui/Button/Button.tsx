import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
    LIGHT = 'light',
    DARK = 'dark',
    WARNING = 'warning',
    ERROR = 'error',
    CLEAR = 'clear'
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button = (props: IButtonProps) => {

    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};