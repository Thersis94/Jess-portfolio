import React from 'react';
import { Link } from 'react-router-dom';
import MenuFactory from '../components/MenuFactory/MenuFactory';
import IGIcon from '../assets/instagram.svg';

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
            mobile: <div className="row py-5 ml-3"><Link className="mx-3 mb-3 mb-sm-0"><div className="ig-link"></div></Link><Link className="mx-3"><div className="linkedin-link"></div></Link></div>,
            desktop: <div className="row py-5"><Link className="mx-3"><div className="ig-link"></div></Link><Link className="mx-3"><div className="linkedin-link"></div></Link></div>
        },
        center: {
            mobile: <Link to="/" className="top-left-name-link"><h1 className="text-center top-left-name text-theme-dark py-3">Jessica Bangs</h1></Link>,
            desktop: null
        },
        right: {
            mobile: <div className="" ><MenuFactory name={<div className="menu-icon"></div>} dropdown={true} routeData={Routes.publicRouteData} /></div>,
            desktop: null
        }
    }
}

export { ThemeConfig, Routes };