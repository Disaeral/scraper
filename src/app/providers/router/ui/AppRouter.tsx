import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppRouter.module.scss'

const AppRouter = (): JSX.Element => {
    return (
        <div className={classNames(cls['page-content-main'], [], {})}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routeConfig.map(({ element, path }, id) => <Route key={id + Math.random()} path={path} element={element}/>)}
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter
