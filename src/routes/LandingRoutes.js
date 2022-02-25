import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';

const LandingPage = Loadable(lazy(() => import('views/pages/landing-page')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const LandingRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <LandingPage />
        }
    ]
};

export default LandingRoutes;
