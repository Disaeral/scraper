import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routerConfig/routerConfig'

const AppRouter = (): JSX.Element => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({ element, path }, id) => <Route key={id + Math.random()} path={path} element={(<div className='page-wrapper'>{element}</div>)}/>)}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
