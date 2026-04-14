import React from 'react';
import NavBar from '../components/shared/NavBar/NavBar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Layout;