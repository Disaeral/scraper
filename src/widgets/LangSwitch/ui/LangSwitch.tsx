import { useTranslation } from 'react-i18next';
import cls from './LangSwitch.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ILangSwitchProps {
    className?: string;
}

export const LangSwitch = ({className}: ILangSwitchProps) => {
    const [ t, i18n ] = useTranslation();

    const handleLangSwitch = () => {
        i18n.changeLanguage(i18n.language === "en" ? "jp" : "en")
    }

    return (
        <div className={classNames(cls.langswitch, [className])} onClick={handleLangSwitch}>
            perevod
        </div>
    );
};