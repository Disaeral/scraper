import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';

interface ISidebarProps {
    className?: string;
}

export const Sidebar = (props: ISidebarProps) => {
    
    const [collapsed, setCollapsed] = useState(false);
    const { className } = props;
    const handleSidebarToggle = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}>
            <Button onClick={handleSidebarToggle}>toggle</Button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitch />
            </div>
        </div>
    );
};