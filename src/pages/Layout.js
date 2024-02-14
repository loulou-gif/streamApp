import React from 'react';
import { Outlet } from 'react-router-dom';
import Index from './public/Index';

const Layout = () => {
    return (
        <div className=''>
            <Outlet/>
            <Index/>
        </div>
    );
};

export default Layout;