import { useContext, useState } from 'react';
import cls from './SidebarToggleBtn.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import {  SidebarToggleContext  } from '../lib/SidebarToggleContext'
import { useSidebarToggle } from '../lib/useSidebarToggle';
import { SidebarToggleProvider } from './SidebarToggleProvider';

interface ISidebarToggleBtnProps {
    className?: string;
}

export const SidebarToggleBtn = ({className}: ISidebarToggleBtnProps) => {
    const {collapsed, toggleCollapsed} = useSidebarToggle();
    const handleSidebarToggle = () => {
        toggleCollapsed()
    }

    return (
            <div className={classNames(cls.SidebarToggleBtn, [className])}>
                <Button onClick={handleSidebarToggle}>toggle</Button>
            </div>   
    );
};