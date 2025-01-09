import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouteObject,
} from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Blog } from './components/pages/Blog';
import { Contact } from './components/pages/Contact';
import { Home } from './components/pages/Home';
import { ErrorPage } from './components/pages/Error';
import { Projects } from './components/pages/Projects';
import { AboutMe } from './components/pages/AboutMe';
import { Navbar } from './components/organisms/NavBar';

type Path = "/" | "/home";

const Redirect = ({ to }: { to: Path }) => {
    return <Navigate to={to} replace />;
};

const BodyContainer = styled.div`
    margin-top: 76px;
    min-height: 100vh;
`;

const routes: Array<RouteObject> = [
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <BodyContainer>
                    <Outlet />
                </BodyContainer>
            </>
        ),
        children: [
            {
                path: '/about',
                element: <AboutMe />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/projects',
                element: <Projects />,
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