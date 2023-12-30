import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({element, path}) => <Route path={path} element={(<div className='page-wrapper'>{element}</div>)}/>)}
            </Routes>
      </Suspense>
    );
};

export default AppRouter;