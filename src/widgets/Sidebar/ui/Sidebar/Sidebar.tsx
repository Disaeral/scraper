import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useContext, useState } from 'react';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import { LangSwitch } from 'widgets/LangSwitch/ui/LangSwitch';
import { SidebarToggleContext, useSidebarToggle } from 'widgets/SidebarToggleBtn';
import { SidebarToggleProvider } from 'widgets/SidebarToggleBtn/ui/SidebarToggleProvider';

interface ISidebarProps {
    className?: string;
    // collapsed: boolean;
}

export const Sidebar = (props: ISidebarProps) => {
    
    
    const { className } = props;
    const {collapsed} = useSidebarToggle();
    return (
            <div className={classNames(cls["Sidebar-wrapper"], [], {[cls.collapsed]: collapsed})}>
                    <div className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}>
                    <div className={classNames(cls.switchers)}>
                        <ThemeSwitch />
                        <LangSwitch />
                    </div>
                </div>
            </div>        
    );
};