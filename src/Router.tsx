import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouteObject,
} from 'react-router-dom';
import { Home } from './components/pages/Home';
import { ErrorPage } from './components/pages/Error';
import { AboutMe } from './components/pages/AboutMe';

type Path = "/" | "/home";

const Redirect = ({ to }: { to: Path }) => {
    return <Navigate to={to} replace />;
};

const routes: Array<RouteObject> = [
    {
        path: '/',
        element: (
            <Outlet />
        ),
        children: [
            {
                path: '/about',
                element: <AboutMe />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/',
                element: <Redirect to="/home" />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export { router };
export type { Path };