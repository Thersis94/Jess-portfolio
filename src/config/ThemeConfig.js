import React from 'react';
import { Link } from 'react-router-dom';
import MenuFactory from '../components/MenuFactory/MenuFactory';

const Routes = {
    publicRouteData: {
        AboutMe: {
            text: "About Me",
            icon: null,
            link: "/about",
            children: [],
        },
        MyWork: {
            text: "My Work",
            icon: null,
            link: "/work",
            children: [],
        },
        Education: {
            text: "Education",
            icon: null,
            link: "/education",
            children: [],
        }
    },
    adminRouteData: {

    }
};

const ThemeConfig = {
    header: {
        left: {
            mobile: null,
            desktop: <Link to="/" className="top-left-name-link"><h1 className="top-left-name text-theme-dark">Jessica Bangs</h1></Link>
        },
        center: {
            mobile: null,
            desktop: <MenuFactory name="main-menu" routeData={Routes.publicRouteData} />
        },
        right: {
            mobile: null,
            desktop: null
        }
    },
    footer: {
        left: {
            mobile: null,
            desktop: null
        },
        center: {
            mobile: <Link to="/" className="top-left-name-link"><h1 className="top-left-name text-theme-dark">Jessica Bangs</h1></Link>,
            desktop: null
        },
        right: {
            mobile: <MenuFactory name="Menu" dropdown={true} routeData={Routes.publicRouteData} />,
            desktop: null
        }
    }
}

export { ThemeConfig, Routes };