import React from 'react';
import { Outlet } from 'react-router-dom';
// import Index from './Index';
import NavBar from '../../Components/Navbar';

const Layout = () => {
    return (
        <div className=''>
            {/* <NavBar/> */}
            <Outlet/>
        </div>
    );
};

export default Layout;