import LandingPage from '../page/LandingPage';
import ErrorPage from '../page/ErrorPage';
import WorkPage from '../page/WorkPage';
import CVPage from '../page/CVPage';

export default {
    pages: [
        {
            path: "/",
            src: <LandingPage />,
            roles: ["*"]
        },
        {
            path: "/work",
            src: <WorkPage />,
            roles: ["*"]
        },
        {
            path: "/education",
            src: <CVPage />,
            roles: ["*"]
        }
    ],
    error: {
        path: "",
        src: <ErrorPage />
    }
}