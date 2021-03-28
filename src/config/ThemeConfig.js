import React from 'react';
import { Link } from 'react-router-dom';
import MenuFactory from '../components/MenuFactory/MenuFactory';

const Routes = {
    publicRouteData: {
        MyWork: {
            name: "work",
            text: "My Work",
            icon: null,
            link: "/work",
            children: [],
        },
        Education: {
            name: "education",
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
            mobile: <div className="row py-5 ml-3"><a href="https://www.instagram.com/jbangsss/" target="_blank" rel="noreferrer" className="mx-3 mb-3 mb-sm-0"><div className="ig-link"></div></a><a href="https://www.linkedin.com/in/jessica-bangs-a574a7105/" target="_blank" rel="noreferrer" className="mx-3"><div className="linkedin-link"></div></a></div>,
            desktop: <div className="row py-5"><a href="https://www.instagram.com/jbangsss/" target="_blank" rel="noreferrer" className="mx-3"><div className="ig-link"></div></a><a href="https://www.linkedin.com/in/jessica-bangs-a574a7105/" target="_blank" rel="noreferrer" className="mx-3"><div className="linkedin-link"></div></a></div>
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